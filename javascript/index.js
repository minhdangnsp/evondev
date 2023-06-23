// console.log("Hello world")

// let cars = ["Toyota", "Honda", "BMW"]

// cars.forEach((car) => { console.log(car) })

// function sum(x, y) {
//     return x + y
// }
// console.log(sum(y=3))



// const myObject = {
//     name: "John",
//     age: 30,
//     cars: ["Toyota", "Honda", "BMW"]
// }
// for (let item of Object.values(myObject)) {
//     console.log(item)
// }


const urlGetEntries = "https://api.publicapis.org/entries"
const urlGetCatetories = "https://api.publicapis.org/categories"

async function fetchDataFromAPIServer(url) {
    // debugger
    // console.log("Start fetching, Begin sending request")
    return new Promise((resolve, reject) => {
        fetch(url).then((response) => {
            //this is success block
            // console.log("received response")
            // debugger
            response.json().then((data) => {
                // console.log("received data")
                // debugger
                resolve({ result: data, error: "", message: "Fetch data successfully" })
            })
        }).catch((error) => {
            // debugger
            // console.log("error: " + error)
            //this is error block
            reject({ error: error, message: "Cannot get data" })
        })
    })
}
//now do 2 asynchronous tasks
// console.log("Begin task 1")
// fetchDataFromAPIServer(urlGetEntries).then((result) => {
//     // debugger
//     // console.log("result: " + JSON.stringify(result))
//     console.log("End task 1")
// }).catch((error) => {
//     debugger
// })

// console.log("Begin task 2")
// fetchDataFromAPIServer(urlGetCatetories).then((result) => {
//     // debugger
//     // console.log("result: " + JSON.stringify(result))
//     console.log("End task 2")
// }).catch((error) => {
//     debugger
// })


// now do task 1, then task 2 => async await
async function doTask1() {
try {
    console.log("Begin task 1")
    let result = await fetchDataFromAPIServer(urlGetEntries)
    console.log("End task 1")
    console.log("Begin task 2")
    result = await fetchDataFromAPIServer(urlGetCatetories)
    console.log("End task 2")
}
catch (error) {
    console.log("error: " + error)
}}

doTask1()

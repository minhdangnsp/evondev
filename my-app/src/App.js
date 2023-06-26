import logo from "./logo.svg";
import "./App.css";

function App() {
  const name = "evondev";
  function fullname(firstname, lastname) {
    return `${firstname} ${lastname}`;
  }

  return (
    <div className="feature">
      <img src="" alt="" className="feature-image" />
      <h3 className="feature-title">Title</h3>
      <p className="feature-description">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae cum
        fugiat modi amet officia praesentium voluptatibus saepe ipsum?
        Consectetur reprehenderit eveniet illum culpa praesentium itaque
        repudiandae quaerat similique eligendi fugiat.
      </p>
    </div>
  );

  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       {/* <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p> */}
  //       <h1>Hello {name}</h1>
  //       <h2>{fullname("Nguyen Tran", "Minh Dang")}</h2>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
}

export default App;

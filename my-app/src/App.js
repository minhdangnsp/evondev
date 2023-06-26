import logo from "./logo.svg";
import "./App.css";

function Feature() {
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
}

// parent component
function App() {
  const name = "evondev";
  function fullname(firstname, lastname) {
    return `${firstname} ${lastname}`;
  }

  return (
    <div>
      <YoutubeItem
        image="https://images.unsplash.com/photo-1666919643134-d97687c1826c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1742&q=80"
        avatar="https://images.unsplash.com/photo-1687565021770-cdb4e32002a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
        author="Evondev"
        title="I am Frontend Developer"
      ></YoutubeItem>
      {/* <YoutubeItem image="https://images.unsplash.com/photo-1661956602153-23384936a1d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"></YoutubeItem> */}
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

function YoutubeItem(props) {
  return (
    <div className="youtube-item">
      <div className="youtube-image">
        <img src={props.image} alt="" />
      </div>
      <div className="youtube-footer">
        <img src={props.image} alt="" className="youtube-avatar" />
        <div className="youtube-info">
          <h3 className="youtube-title">{props.title || "This is a title"}</h3>
          <h4 className="youtube-author">
            {props.author || "This is an author name"}
          </h4>
        </div>
      </div>
    </div>
  );
}

export default App;

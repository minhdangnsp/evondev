import logo from "./logo.svg";
import "./App.css";

/**
 * element = <div id="root">Hello world</div> : JSX
 * element = React.createElement('div', {id: 'root'}, 'Hello world') : JS
 * function createElement(elementType, props, ...children)
 * elementType = 'div', 'p', 'span'
 * props = className, id, src, alt, href, ...
 * ... children:
 * element2 = (<div>
 * <span>Hello</span> <span>World</span>
 * </div>)
 * element 2 = React.createElement('div', null,
 * childrend: [
 *  React.createElement('span', null, 'Hello'),
 *  ' ',
 *  React.createElement('span', null, 'World')
 * ]
 * )
 */

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

import "./App.css"; // import css file
import Button from "./components/button/Button";

// parent component
function App() {
  return (
    <div>
      <Button>Primary</Button>
      <Button secondary>Secondary</Button>
    </div>
  );
}

export default App;

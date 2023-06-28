import "./App.css"; // import css file
import Card from "./components/card/Card";
import CardList from "./components/card/CardList";

// parent component
function App() {
  return (
    <div>
      <CardList>
        {Array(9)
          .fill()
          .map((_, index) => (
            <Card></Card>
          ))}
      </CardList>
    </div>
  );
}

export default App;

import "./App.css"; // import css file
import Card from "./components/card/Card";
import CardList from "./components/card/CardList";
import { GlobalStyles } from "./GlobalStyles";

// parent component
function App() {
  return (
    <div>
      <GlobalStyles></GlobalStyles>
      <CardList>
        {/* {Array(9)
          .fill()
          .map((_, index) => (
            <Card></Card>
          ))} */}
        <Card secondary={true}></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </CardList>
    </div>
  );
}

export default App;

import "./App.css"; // import css file
import Card2 from "./components/card/Card2";
import CardList from "./components/card/CardList";
import { GlobalStyles } from "./GlobalStyles";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    blue: "#2979FF",
  },
  orange: "#FF6D3F",
};

// parent component
function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <GlobalStyles></GlobalStyles>
        <CardList>
          <Card2 secondary={true}></Card2>
          <Card2></Card2>
        </CardList>
      </ThemeProvider>
    </div>
  );
}

export default App;

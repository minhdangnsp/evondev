import "./App.css"; // import css file
import YoutubeList from "./components/youtube/YoutubeList";

// parent component
function App() {
  const name = "Evondev";
  return (
    <div>
      <YoutubeList>{name}</YoutubeList>
    </div>
  );
}

export default App;

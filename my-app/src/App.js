import "./App.css"; // import css file
import { YoutubeData } from "./YoutubeData";

// parent component
function App() {
  return (
    <div className="youtube-list">
      {YoutubeData.map((item, index) => (
        <div>
          <YoutubeItem
            key={item.id} // key is not required, but when rendering list, it is recommended to have key
            image={item.image}
            avatar={item.avatar || item.image}
            author={item.author}
            title={item.title}
          ></YoutubeItem>
        </div>
      ))}
    </div>
  );
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

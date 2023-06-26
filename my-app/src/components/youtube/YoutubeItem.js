function YoutubeItem(props) {
  return (
    <div className="">
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

export default YoutubeItem;

import React from "react";
import { YoutubeData } from "../../data";
import YoutubeItem from "./YoutubeItem";

const YoutubeList = (props) => {
  return (
    <div className="youtube-list">
      {props.children}
      {YoutubeData.map((item, index) => {
        return (
          <div>
            <YoutubeItem
              key={item.id} // key is not required, but when rendering list, it is recommended to have key
              image={item.image}
              avatar={item.avatar || item.image}
              author={item.author}
              title={item.title}
            ></YoutubeItem>
          </div>
        );
      })}
    </div>
  );
};

export default YoutubeList;

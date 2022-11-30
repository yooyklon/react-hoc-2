import React from "react";

import Popular from "./Popular";

import New from "./New";

export default function Video(props) {
  return (
    <div className="item item-video">
      <iframe
        src={props.url}
        frameborder="0"
        allow="autoplay; encrypted-media"
        allowfullscreen
      ></iframe>
      <p className="views">Просмотров: {props.views}</p>
    </div>
  );
}

export const VideoPopularContainer = (function (Component) {
  return class extends React.Component {
    render() {
      return (
        <Popular>
          <Component {...this.props} />
        </Popular>
      );
    }
  };
})(Video);
export const VideoNewContainer = (function (Component) {
  return class extends React.Component {
    render() {
      return (
        <New>
          <Component {...this.props} />
        </New>
      );
    }
  };
})(Video);

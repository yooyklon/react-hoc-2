import React from "react";

import Popular from "./Popular";

import New from "./New";

export default function Article(props) {
  return (
    <div className="item item-article">
      <h3>
        <a href="#">{props.title}</a>
      </h3>
      <p className="views">Прочтений: {props.views}</p>
    </div>
  );
}

export const ArticlePopularContainer = (function (Component) {
  return class extends React.Component {
    render() {
      return (
        <Popular>
          <Component {...this.props} />
        </Popular>
      );
    }
  };
})(Article);

export const ArticleNewContainer = (function (Component) {
  return class extends React.Component {
    render() {
      return (
        <New>
          <Component {...this.props} />
        </New>
      );
    }
  };
})(Article);

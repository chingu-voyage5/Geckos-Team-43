import React from "react";
import { Preloader } from "react-materialize";
class Loading extends React.Component {
  render() {
    return (
      <div className="wrapper preloader">
        <Preloader size="big" />
      </div>
    );
  }
}

export default Loading;

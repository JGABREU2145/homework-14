import React from "react";
import "./style.css";

function InfoContainer(props) {
  return <div className="wrapper">{props.children}</div>;
}

export default InfoContainer;
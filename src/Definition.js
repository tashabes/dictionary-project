import React from "react";

import "./meaning.css";

export default function Definition(props) {
  if (props.result) {
    return <div className="definition">{props.result}</div>;
  } else {
    return null;
  }
}

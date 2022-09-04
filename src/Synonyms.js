import React from "react";
import "./synonyms.css";

export default function Synonyms(props) {
  if (props.result.synonyms) {
    return (
      <ul className="Synonyms">
        {props.result.synonyms.map(function (synonym, index) {
          return <li key={index}>{synonym}</li>;
        })}
      </ul>
    );
  } else {
    return null;
  }
}

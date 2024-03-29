import React from "react";
import "./phonetic.css";

export default function Phonetic(props) {
  return (
    <div className="Phonetic">
      <a
        href={props.phonetic.audio}
        target="_blank"
        rel="noreferrer"
        alt="Word image"
      >
        Listen
      </a>
      <span className="text">{props.phonetic.text}</span>
    </div>
  );
}

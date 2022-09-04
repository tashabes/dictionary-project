import React from "react";
import Synonyms from "./Synonyms";
import "./meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p>
              <strong>Definition</strong>
              {definition.definition}
              <br></br>
              <strong>Example:</strong>
              <em>{definition.example}</em>
              <br></br>
              <Synonyms result={props.meaning} />
            </p>
          </div>
        );
      })}
    </div>
  );
}

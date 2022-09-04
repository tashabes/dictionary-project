import React from "react";
import Synonyms from "./Synonyms";
import "./meaning.css";
import Definition from "./Definition";
import Example from "./Example";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <ul>
              <li>
                <Definition result={definition.definition} />
              </li>

              <Example result={definition.example} />
            </ul>
          </div>
        );
      })}
      <Synonyms result={props.meaning} />
    </div>
  );
}

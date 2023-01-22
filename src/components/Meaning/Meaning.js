import React from "react";
import Synonyms from "../Synonyms/Synonyms";
import "./Meaning.css";

export default function Meaning(props){
    return (
        <section className="Meaning">
            <h3><i className="far fa-lightbulb"></i> {props.meaning.partOfSpeech}</h3>
            {props.meaning.definitions.map(function (definition, index){
                if (definition.example){
                    return (
                        <div key={index}>
                            <p className="definition">
                                <strong>{index + 1}:</strong> {definition.definition}
                            </p>
                            <p className="example"><em>"{definition.example}"</em></p>
                            <Synonyms synonyms={definition.synonyms} />
                        </div>
                    );
                } else {
                    return (
                        <div key={index}>
                            <p className="definition">
                                <strong>{index + 1}:</strong> {definition.definition}
                            </p>
                            <Synonyms synonyms={definition.synonyms} />
                        </div>
                    );
                }
            })}
        </section>
    );
}
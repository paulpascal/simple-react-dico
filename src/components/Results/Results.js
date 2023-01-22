import React from "react";
import Phonetic from "../Phonetic/Phonetic";
import Meaning from "../Meaning/Meaning";
import "./Results.css";

export default function Results (props){
    if (props.info){
        return (
        <div className="Results">
            <section>
                <h2>{props.info[0].word}</h2>
                {props.info[0].phonetics.map(function(phonetic, index){
                    return (
                        <div key={index}>
                            <Phonetic phonetic={phonetic} />
                        </div>
                    );
                })}
            </section>
            {props.info[0].meanings.map(function (meaning, index){
                return (
                    <div key={index}>
                        <Meaning meaning={meaning} />
                    </div>
                )
            })}
        </div>
    );
    } else {return null;}
}
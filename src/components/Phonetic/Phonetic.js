import React from "react";
import ReactAudioPlayer from 'react-audio-player';
import "./Phonetic.css"

export default function Phonetic (props){
    if(props.phonetic.audio){
        return(
            <div className="Phonetic">
                <p>{props.phonetic.text}</p>
                <ReactAudioPlayer src={props.phonetic.audio} controls={true} />
            </div>
        );
    } else {
        let text = "Sorry, this audio is unavaliable =(";
        return(
            <div className="Phonetic">
                <p>{props.phonetic.text}</p>
                <p>{text}</p>
            </div>
        );
    }
}
import React from "react";
import "./Photos.css";

export default function Photos(props){
    if (props.photos){
        return (
            <section className="Photos">
                {props.photos.map(function(photo, index){
                    return(
                        <a href={photo.src.original} key={index} target="_blank" rel="noreferrer">
                            <img src={photo.src.small} alt="" />
                        </a>
                    );
                })}
            </section>
        );
    } else {return null;}
}
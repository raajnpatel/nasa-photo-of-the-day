import React, {useState, useEffect} from "react";
import "../App.css";

function Content(props){
    return(
        <div className="content">
            <h1>{props.title}</h1>
            <img className="image" src={props.hdurl} alt = "NASA Image" />
            <p>{props.explanation}</p>
        </div>
    );
}

export default Content;
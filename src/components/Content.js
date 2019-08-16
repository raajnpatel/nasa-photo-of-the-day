import React, {useState, useEffect} from "react";
import "../App.scss";
import styled from 'styled-components'
import { Button, Image } from 'semantic-ui-react'


function Content(props){
        let hdQuality = props.hdurl;
        let sdQuality = props.url;
    //     let step = true;
    // let qualityClick = function(){
    //     step = !step;
    //     if(step===true){
    //         console.log('hello');
    //     } else (console.log('bye'));
    // };
    return(
        <div className="content">
            <h1>{props.title}</h1>
            <Image src={hdQuality} alt = "NASA Image" />
            <div className = "buttonsMid">
                <p>Click below to open HD/SD format of the Daily Image in a new tab.</p>
                <Button className = "primaryButton" onClick = {()=>window.open(props.hdurl, "_blank")}>HQ Quality</Button>
                <Button className = "secondaryButton" onClick = {()=>window.open(props.url, "_blank")}>SD Quality</Button>
            </div>
            <p>{props.explanation}</p>

        </div>
    );
}

export default Content;
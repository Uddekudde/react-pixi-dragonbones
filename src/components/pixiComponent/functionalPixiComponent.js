import React, { useState, useEffect, useRef } from 'react';
import './pixiComponent.scss';
import TitleContainer from '../title/TitleContainer.js';
import DragonBonesScene from '../../out/DragonBonesScene.js';

import skeleton from '../../out/resource/parallaxCove_ske.json';
import texJson from "../../out/resource/parallaxCove_tex.json";
import texPng from "../../out/resource/parallaxCove_tex.png"; //Import so webpack puts the png in the build/static/media folder. Webpack returns the path to the file.


function PixiComponent(props) {
    const [pixiHandler, setPixiHandler] = useState([]);
    const [isReady, setIsReady] = useState(false);
    let gameCanvas = null;

    useEffect( () =>{
        setPixiHandler(new DragonBonesScene(gameCanvas, skeleton, texJson, texPng));
        setIsReady(true);
        pixiHandler.parallax(400, 100);
        window.addEventListener("resize", resizeRenderer);
        window.addEventListener('mousemove', mouseHandler);
        window.addEventListener('touchmove', touchHandler);
        if(isReady) {
            pixiHandler.playAnimation(props.animation);
        }
        return () => {
            window.removeEventListener("resize", resizeRenderer);
            window.removeEventListener("mousemove", mouseHandler);
            window.removeEventListener("touchmove", touchHandler);
        };
    }, []);

    useEffect( () =>{
        if(isReady) {
            pixiHandler.playAnimation(props.animation);
        }
    }, [isReady]);

    let mouseHandler = (e) => {
        let pageX = e.pageX;
        let pageY = e.pageY;
        pixiHandler.parallax(pageX, pageY);
    };

    let touchHandler = (e) => {
        let pageX = e.touches[0].clientX;
        let pageY = e.touches[0].clientY;
        pixiHandler.parallax(pageX, pageY);
    };

    let resizeRenderer = () =>  {
        pixiHandler.resizeRenderer(gameCanvas.clientWidth, window.innerHeight);
        this.forceUpdate();
    };

    let height = window.innerHeight;
    return (
        <div>
            <div style={{display:"flex", flexDirection: "column"}}>
                <div className="pixiCanvas" ref={(refTest) => {gameCanvas = refTest}} style={{height: height}} >
                    <TitleContainer/>
                </div>
            </div>
        </div>
    );
}

export default PixiComponent;
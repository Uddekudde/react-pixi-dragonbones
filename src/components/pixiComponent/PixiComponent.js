import React from 'react';
import './pixiComponent.scss';
import TitleContainer from '../title/TitleContainer.js';
import DragonBonesScene from '../../out/DragonBonesScene.js';

import skeleton from '../../out/resource/parallaxCove_ske.json';
import texJson from "../../out/resource/parallaxCove_tex.json";
import texPng from "../../out/resource/parallaxCove_tex.png"; //Import so webpack puts the png in the build/static/media folder. Webpack returns the path to the file.

//import changeText from "../../actions/animationActions";

export default class PixiComponent extends React.Component{


    constructor(props) {
        super(props);
        this.gameCanvas = null;
        this.state = {
            pixiHandler: [],
            readyForUpdate: false,
        }
    }

    componentDidMount() {
        let component = this;
        component.setState({pixiHandler: new DragonBonesScene(this.gameCanvas, skeleton, texJson, texPng)});
        component.setState({readyForUpdate: true});
        window.addEventListener("resize", this.resizeRenderer);
        window.addEventListener('mousemove', this.mouseHandler);
        window.addEventListener('touchmove', this.touchHandler);
    }

    mouseHandler = (e) => {
        let pageX = e.pageX;
        let pageY = e.pageY;
        this.state.pixiHandler.parallax(pageX, pageY);
    }

    touchHandler = (e) => {
        let pageX = e.touches[0].clientX;
        let pageY = e.touches[0].clientY;
        this.state.pixiHandler.parallax(pageX, pageY);
    }

    componentDidUpdate(){
        if(this.state.readyForUpdate) {
            this.state.pixiHandler.playAnimation(this.props.animation);
        }
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.resizeRenderer);
        window.removeEventListener("mousemove", this.mouseHandler);
        window.removeEventListener("touchmove", this.touchHandler);
    }

    resizeRenderer = () =>  {
        this.state.pixiHandler.resizeRenderer(this.gameCanvas.clientWidth, window.innerHeight);
        this.forceUpdate();
    }

    render(){
        let component = this;
        let height = window.innerHeight;

        return (
            <div>
                <div style={{display:"flex", flexDirection: "column"}}>
                    <div className="pixiCanvas" ref={(thisDiv) => {component.gameCanvas = thisDiv}} style={{height: height}} >
                        <TitleContainer/>
                    </div>
                </div>
            </div>
        );
    }
}



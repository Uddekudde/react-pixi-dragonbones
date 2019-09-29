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

        this.handleChange = this.handleChange.bind(this);

        this.state = {
            pixiHandler: [],
            readyForUpdate: false,
            formValue: []
        }
    }

    componentDidMount() {
        let component = this;
        //let elHeight = document.getElementById('containerDiv').clientHeight;
        component.setState({pixiHandler: new DragonBonesScene(this.gameCanvas, skeleton, texJson, texPng)});
        component.setState({readyForUpdate: true});
        window.addEventListener("resize", this.resizeRenderer);
        window.addEventListener('mousemove', this.mouseHandler);
    }

    mouseHandler = (e) => {
        let pageX = e.pageX;
        let pageY = e.pageY;
        this.state.pixiHandler.parallax(pageX, pageY);
    }

    componentDidUpdate(){
        if(this.state.readyForUpdate) {
            this.state.pixiHandler.playAnimation(this.props.animation);
        }
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.resizeRenderer);
        window.removeEventListener("resize", this.mouseHandler);
    }

    resizeRenderer = () =>  {
        //console.log(this.gameCanvas.clientHeight+"  "+this.gameCanvas.clientWidth+" canvas");
        this.state.pixiHandler.resizeRenderer(this.gameCanvas.clientWidth, window.innerHeight);
        this.forceUpdate();
    }

    handleChange(event) {
        this.setState({formValue: event.target.value});
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



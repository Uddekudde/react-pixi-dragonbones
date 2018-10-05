import React from 'react';
import { connect } from "react-redux";
import Button from '@material-ui/core/Button';
import '../stylesheets/pixiComponent.css';
import TitleContainer from '../redux-containers/TitleContainer.js';

import DragonBonesScene from '../out/DragonBonesScene.js';
import skeleton from '../out/resource/hills_ske.json';
import texJson from "../out/resource/hills_tex.json";
import texPng from "../out/resource/hills_tex.png"; //Import so webpack puts the png in the build/static/media folder. Webpack returns the path to the file.

import changeText from "../actions/animationActions"; //used in mapDispatchToProps

export default class PixiComponent extends React.Component{


    constructor(props) {
        super(props);
        console.log(this.props.text);
        this.gameCanvas = null;

        this.handleChange = this.handleChange.bind(this);

        this.state = {
            pixiHandler: [],
            //readyForUpdate: false,
            formValue: []
        }
    }

    componentDidMount() {
        let component = this;
        //let elHeight = document.getElementById('containerDiv').clientHeight;
        component.setState({pixiHandler: new DragonBonesScene(this.gameCanvas, skeleton, texJson, texPng)});
        component.setState({readyForUpdate: true});
        window.addEventListener("resize", this.resizeRenderer);
    }

    componentDidUpdate(){
        if(this.state.readyForUpdate) {
            //this.state.pixiHandler.changeText(this.props.text);
            this.state.pixiHandler.playAnimation(this.props.animation);
        }
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.resizeRenderer);
    }

    resizeRenderer = () => {
        console.log(this.gameCanvas.clientHeight+"  "+this.gameCanvas.clientWidth+" canvas");
        this.state.pixiHandler.resizeRenderer(this.gameCanvas.clientWidth, window.innerHeight -3);
        this.forceUpdate();
    }

    changeTheText = () => {
        this.props.changeText(this.state.formValue);
        //this.state.pixiHandler.changeText(this.props.text);
    };

    handleChange(event) {
        this.setState({formValue: event.target.value});
    }

    render(){
        let component = this;
        //let height = window.innerHeight -103;
        //let height = window.innerHeight -67;
        let height = window.innerHeight -3;

        return (
            <div>
                {/*
                <div onClick={component.changeTheText} style={{height: '100px', width: '200px', backgroundColor: 'black'}}/>
                */}
                {/*<label>
                    Name:
                    <input type="text" value={this.state.formValue} onChange={component.handleChange} />
                </label>
                <Button variant="contained" color="primary" onClick={component.changeTheText}>
                    Submit
                </Button>*/}
                <div style={{display:"flex", flexDirection: "column"}}>
                    <div className="pixiCanvas" ref={(thisDiv) => {component.gameCanvas = thisDiv}} style={{flex:"1 1 "+height.toString()+"px"}} >
                        <TitleContainer/>
                    </div>
                </div>
            </div>
        );
    }
}



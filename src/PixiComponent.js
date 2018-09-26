import React from 'react';
import { connect } from "react-redux";
import Button from '@material-ui/core/Button';
import './pixiComponent.css';

import HelloDragonBones from './out/HelloDragonBones.js';
import skeleton from './out/resource/hills_ske.json';
import texJson from "./out/resource/hills_tex.json";
import texPng from "./out/resource/hills_tex.png"; //Import so webpack puts the png in the static/media folder.

import changeText from "./actions/animationActions";

const mapStateToProps = state => {
    return {
        text: state.animation.animationText
    }
};

const mapDispatchToProps = dispatch => {
    return {
        changeText: (text) =>
            dispatch({
                type: "CHANGE_TEXT",
                payload: text
            })
    }
};

class PixiComponent extends React.Component{


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
        component.setState({pixiHandler: new HelloDragonBones(this.gameCanvas, skeleton, texJson)});
        //component.setState({readyForUpdate: true});
        window.addEventListener("resize", this.resizeRenderer);
    }

    componentDidUpdate(){
       // if(this.state.readyForUpdate) {
            this.state.pixiHandler.changeText(this.props.text);
       // }
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.resizeRenderer);
    }

    resizeRenderer = () => {
        console.log(this.gameCanvas.clientHeight+"  "+this.gameCanvas.clientWidth);
        this.state.pixiHandler.resizeRenderer(this.gameCanvas.clientWidth, window.innerHeight -103);
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
        let height = window.innerHeight -103;

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
                    <div className="pixiCanvas" ref={(thisDiv) => {component.gameCanvas = thisDiv}} style={{flex:"1 1 "+height.toString()+"px"}} />
                </div>
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PixiComponent);


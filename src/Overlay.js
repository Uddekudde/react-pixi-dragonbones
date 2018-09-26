import React from 'react';
import { Link } from 'react-router-dom'
import { Transition } from 'react-transition-group';

import './overlay.css';

export default class Overlay extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            className: "overlay-invis"
        };

        setTimeout(() => {
            this.setState({
                className: "overlay-vis"
            });
        }, 50);
    }

    render(){
        return(
            <div className={ this.state.className } >
                <Link className="closeBtn animated animatedFadeInUp fadeInUp" style={{animationDelay: ".5s"}}  to='/' >CLOSE</Link>
                <div style={{display: "flex", flexDirection:"row"}}>
                    <div style={{flex:"1"}}/>
                    <div style={{flex:"8"}}>
                        <div style={{display:"flex", flexDirection:"column"}}>
                            <div style={{flex:"1 270px" }}/>
                            <div style={{flex:"2 540px" }}>
                                <h1 className="title1 animated animatedFadeInUp fadeInUp" style={{animationDelay: ".5s"}} >Hello,</h1>
                                <h2 className="title2 animated animatedFadeInUp fadeInUp" style={{animationDelay: ".7s"}} >Is it me you're looking for?</h2>
                                <p className="description animated animatedFadeInUp fadeInUp" style={{animationDelay: ".9s"}} >
                                    I am currently studying software engineering at KTH Kista. <br/>
                                    My interests are UX and web development, but I have knowledge in many areas in IT.
                                </p>
                            </div>
                            <div style={{flex:"1 270px"}}/>
                        </div>
                    </div>
                    <div style={{flex:"1"}}/>
                </div>
            </div>
        );
    }

}
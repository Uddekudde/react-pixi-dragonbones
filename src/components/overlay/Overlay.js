import React from 'react';
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';

import './overlay.css';

export default class Overlay extends React.Component {

    constructor(props){
        super(props);

        this.ACTIVE_NAME = "overlay-vis";
        this.INACTIVE_NAME = "overlay-vis";

        this.props.overlayActive('true');


        this.state = {
            className: this.INACTIVE_NAME
        };

        setTimeout(() => {
            this.setState({
                className: this.ACTIVE_NAME
            });
        }, 50);
    }

    render(){
        return(
            <div className={ this.state.className + ' animated fadeIn' } >
                {/*<Link className="closeBtn animated animatedFadeInUp fadeInUp" style={{animationDelay: ".5s"}}  to='/' >CLOSE</Link>*/}
                <div style={{display: "flex", flexDirection:"row"}}>
                    <div style={{flex:"1"}}/>
                    <div style={{flex:"8"}}>
                        <div style={{display:"flex", flexDirection:"column"}}>
                            <div style={{display: 'flex', flex:"1 300px", flexDirection:"row"}}>
                                <div style={{flex:"1 270px" }}/>
                                <div style={{display: 'flex', flex:"1 270px", flexDirection:'column' }}>
                                    <div style={{flex:"1 270px" }}/>
                                    <div className="closeBtn animated fadeInUp" style={{marginLeft:'auto',marginRight:'auto'}}>
                                        <Button component={Link} style={{color: 'white'}} to='/' onClick={() => this.props.overlayActive('false')}>
                                            Close
                                        </Button>
                                    </div>
                                    <div style={{flex:"1 270px" }}/>
                                </div>
                                <div style={{flex:"1 270px" }}/>
                            </div>
                            <div style={{flex:"2 300px", overflow:'auto'}}>
                                <h1 className="title1 animated fadeInUp" style={{animationDelay: ".5s"}} >Hello,</h1>
                                <h2 className="title2 animated fadeInUp" style={{animationDelay: ".7s"}} >Is it me you're looking for?</h2>
                                <p className="description animated fadeInUp" style={{animationDelay: ".9s"}} >
                                    I am currently finishing my studies in software engineering at KTH Kista. <br/>
                                    My main interests are UX and web app development, but I have knowledge in many areas in IT. <br/>
                                    Among my individual courses were human computer interaction, mobile application development and ethical hacking. <br/>
                                </p>
                                <p className="description animated fadeInUp" style={{animationDelay: ".9s"}} >
                                    In my free time I do digital painting and animation in Photoshop. <br/>
                                    I am always looking for new technologies to learn. <br/>
                                </p>
                                <p className="description animated fadeInUp" style={{animationDelay: ".9s"}} >
                                    You can reach me at tudd@kth.se <br/>
                                    <a style={{color:'white'}} href='https://github.com/Uddekudde'>GitHub</a> LinkedIn <br/>
                                </p>
                                <div style={{height:'3em'}}/>
                            </div>
                            <div style={{flex:"1 300px"}}/>
                        </div>
                    </div>
                    <div style={{flex:"1"}}/>
                </div>
            </div>
        );
    }
}

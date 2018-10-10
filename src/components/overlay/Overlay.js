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
                            <div style={{flex:"2 600px", overflow:'auto'}}>
                                <h1 className="title1 animated fadeInUp" style={{animationDelay: ".5s"}} >
                                    Hello,
                                </h1>
                                <h2 className="title2 animated fadeInUp" style={{animationDelay: ".7s"}} >
                                    Is it me you're looking for?
                                </h2>
                                <p className="description animated fadeInUp" style={{animationDelay: ".9s"}} >
                                    I'm a Stockholm based student currently finishing my bachelor in software engineering at KTH Kista.<br/>
                                    My main interest is web development, specifically React apps but I have knowledge in many areas in IT.<br/>
                                    Among my individual courses are human-computer interaction, mobile application development and ethical hacking.<br/>
                                </p>
                                <p className="description animated fadeInUp" style={{animationDelay: ".9s"}} >
                                    In my free time I do digital painting and animation in Photoshop. <br/>
                                    I try to constantly be teaching myself and I'm always looking for new technologies to learn. <br/>
                                </p>
                                <div style={{display:'flex'}}>
                                    <div className='flexBox' style={{display:'flex', flex:"2 300px"}}>
                                        <div style={{flex:"2 100px"}}>
                                            <p className="subHeader description animated fadeInUp" style={{animationDelay: ".9s", }} >
                                                Experience
                                            </p>
                                            <p className="description animated fadeInUp" style={{animationDelay: ".9s"}} >
                                                As part of my bachelor's thesis I designed and built a React app for visualizing troubleshooting data for a company, Mavenoid.<br/>
                                                I also built the backend API for the app.
                                            </p>
                                        </div>
                                        <div className='divider' />
                                        <div style={{flex:"2 100px"}}>
                                            <p className="subHeader description animated fadeInUp" style={{animationDelay: ".9s"}} >
                                                Skills
                                            </p>
                                            <p className="description animated fadeInUp" style={{animationDelay: ".9s"}} >
                                                While my main interest is front end development, I also have experience working in the back end with Java/PHP and mySQL.<br/>
                                                I have experience with visual JavaScript frameworks like D3 and PixiJS.
                                            </p>
                                        </div>
                                    </div>
                                    <div className='stopper'/>
                                </div>
                                <p className="description animated fadeInUp" style={{animationDelay: ".9s"}} >
                                    You can reach me at tudd@kth.se or on <a style={{color:'white'}} href='https://github.com/Uddekudde'>GitHub</a> or <a style={{color:'white'}} href='https://www.linkedin.com/in/tobias-udd-783530171/'>LinkedIn</a>
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

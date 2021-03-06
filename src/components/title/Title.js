import React from 'react';
import './title.scss';

export default class Title extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            open: false,
            className: 'fadeInUp'
        }
    }

    render(){

        let currentClassName = (this.props.overlayIsActive === 'true') ? 'fadeOutUp' : 'fadeInUp';
        if(currentClassName !== this.state.className){
            this.setState({className: currentClassName});
        }

        return (
            <div  style={{position: 'fixed', display: 'flex', flexDirection:'column', width: '100%', height: '100%'}}>
                <div className='title' style={{margin:'auto'}}>
                    <div className={this.state.className + " animated"}>Tobias Udd</div>
                    <div className={this.state.className + " animated subtitle"} style={{animationDelay: '.8s'}} >Creative Engineer</div>
                </div>
            </div>
        )
    }
}
import React from 'react';
import PixiComponent from './PixiComponent.js';
import Button from '@material-ui/core/Button';


export default class Container extends React.Component{

    constructor(props){
        super(props);


        this.state = {
            pixiLoaded: false,
            pixiComponent: null
        }
    }

    /**
    componentDidMount(){
        import('./PixiComponent.js')
            .then(({ PixiComponent }) => {
                this.setState({pixiLoaded: true});
                this.setState({pixiComponent: PixiComponent.default});
            })
            .catch(err => {
                console.log(err);
            });
    }
    **/

    render(){
        /**
        let component = this;
        const {pixiComponent: PixiWrapper } = component.state;

        return(
            <div>
                {PixiWrapper && <PixiWrapper/>}
            </div>
        )
         **/
        return(
            <div>
                <PixiComponent/>
            </div>
        )
    }
}
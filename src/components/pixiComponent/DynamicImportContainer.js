import React from 'react';
import Loadable from 'react-loadable';
import LinearProgress from '@material-ui/core/LinearProgress';


function Loading(props) {
    if (props.pastDelay){
        return (
            <div style={{display: "flex", flexDirection: "column", background:"black"}}>
                <div style={{flex:"2 500px"}}>
                </div>
                <LinearProgress/>
                <div style={{flex:"2 500px"}}>
                </div>
            </div>
        );
    } else {
        return <div/>;
    }
}

const LoadableComponent = Loadable({
    loader: () => import('./PixiComponentContainer.js'),
    loading: Loading,
    delay: 300,
});

export default class DynamicImportContainer extends React.Component{

    render(){
        return (
            <div>
                <LoadableComponent/>
            </div>
        );
    }

    
}
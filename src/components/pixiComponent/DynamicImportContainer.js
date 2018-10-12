import React from 'react';
import Loadable from 'react-loadable';
import LinearProgress from '@material-ui/core/LinearProgress';


function Loading(props) {
    if (props.pastDelay){
        return (
            <div>
                <LinearProgress />
                <br />
                <LinearProgress color="secondary" />
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
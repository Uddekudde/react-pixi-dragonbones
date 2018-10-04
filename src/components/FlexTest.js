import React from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';

export default class FlexTest extends React.Component {

    constructor(props) {
        super(props);
    }

    render(){
        let height = window.innerHeight -65;

        return (
            <div>
                <LinearProgress />
                <br />
                <LinearProgress color="secondary" />
            </div>
        )
    }
}
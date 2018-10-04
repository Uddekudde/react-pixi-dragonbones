import React from 'react';
import { Switch, Route } from 'react-router-dom'
import './stylesheets/index.css';
import DynamicImportContainer from './components/DynamicImportContainer'
import FlexTest from './components/FlexTest.js';
import OverlayContainer from './redux-containers/OverlayContainer.js';
import TopBarContainer from './redux-containers/TopBarContainer.js';

export default class Main extends React.Component {


    render(){
        return (
            <div>
                {/*<Header/>*/}
                <TopBarContainer/>
                <Switch>
                    <Route exact path='/' component={DynamicImportContainer} />
                    <Route exact path='/about' component={DynamicImportContainer} />
                    <Route path='/pixi' component={FlexTest}/>
                </Switch>
                <Route exact path="/about" component={OverlayContainer} />
            </div>
        );
    }
}
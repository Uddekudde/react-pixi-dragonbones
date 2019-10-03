import React from 'react';
import { Switch, Route } from 'react-router-dom'
import './index.scss';
import DynamicImportContainer from './components/pixiComponent/DynamicImportContainer.js'
import OverlayContainer from './components/overlay/OverlayContainer.js';
import TopBarContainer from './components/topBar/TopBarContainer.js';

export default class Main extends React.Component {

    render(){
        return (
            <div>
                <TopBarContainer/>
                <Switch>
                    <Route exact path='/' component={DynamicImportContainer} />
                    <Route exact path='/about' component={DynamicImportContainer} />
                </Switch>
                <Route exact path="/about" component={OverlayContainer} />
            </div>
        );
    }
}
import React from 'react';
import { Switch, Route } from 'react-router-dom'
import './index.css';
import DynamicContainer from './DynamicContainer'
import FlexTest from './FlexTest.js';
import Overlay from './Overlay.js';
import TopBar from './TopBar.js';

export default class Main extends React.Component {


    render(){
        return (
            <div>
                {/*<Header/>*/}
                <TopBar/>
                <Switch>
                    <Route exact path='/' component={DynamicContainer} />
                    <Route exact path='/about' component={DynamicContainer} />
                    <Route path='/pixi' component={FlexTest}/>
                </Switch>
                <Route exact path="/about" component={Overlay} />
            </div>
        );
    }
}
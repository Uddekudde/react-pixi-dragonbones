import React from 'react';
import { Switch, Route, Link } from 'react-router-dom'
import './index.css';
import Game from './game.js';
import DynamicContainer from './DynamicContainer'
import FlexTest from './FlexTest.js';
import Overlay from './Overlay.js';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

export default class Main extends React.Component {


    render(){
        return (
            <div>
                {/*<Header/>*/}
                <AppBar position="static" color="default">
                    <Toolbar>
                        <Typography variant="title" color="inherit">
                            <Link to='/'>Home</Link>
                            <Link to='/tictactoe'>ゲム</Link>
                            <Link to='/pixi'>アニメ絵ション</Link>
                            <Link to='/about'>About</Link>
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Switch>
                    <Route exact path='/' component={DynamicContainer} />
                    <Route exact path='/about' component={DynamicContainer} />
                    <Route path='/tictactoe' component={Game}/>
                    <Route path='/pixi' component={FlexTest}/>
                </Switch>
                <Route exact path="/about" component={Overlay} />
            </div>
        );
    }
}
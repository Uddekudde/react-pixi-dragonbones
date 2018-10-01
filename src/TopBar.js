import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import AnimationDrawer from './AnimationDrawer.js';

export default class TopBar extends React.Component {

    render(){
        return(
            <AppBar color="default" style={{flexGrow: 1, background: 'transparent', boxShadow: 'none'}} >
                <Toolbar >
                    <Typography variant="title" color="inherit">
                        {/*<Link to='/'>Home</Link>
                        <Link to='/pixi'>アニメ絵ション</Link>*/}
                        <Button component={Link} style={{color: 'white'}} to='/about'>
                            About
                        </Button>
                    </Typography>
                    <div style={{flex: '1 100px'}}>
                    </div>
                    <AnimationDrawer/>
                </Toolbar>
            </AppBar>
        )
    }
}
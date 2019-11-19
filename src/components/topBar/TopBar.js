import React from 'react';
import { Link } from 'react-router-dom';
import { HashRouter } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

//import AnimationDrawerContainer from '../animationDrawer/AnimationDrawerContainer.js';

export default class TopBar extends React.Component {

    render(){
        return(
            <HashRouter>
            <AppBar color="default" style={{flexGrow: 1, background: 'transparent', boxShadow: 'none'}} >
                <Toolbar >
                    <Typography variant="title" color="inherit">
                        <Button component={Link} style={{color: 'white'}} to='/about' onClick={() => this.props.overlayActive('true')}>
                            About
                        </Button>
                    </Typography>
                    <div style={{flex: '1 100px'}}>
                    </div>
                    {/*<AnimationDrawerContainer/>*/}
                </Toolbar>
            </AppBar>
            </HashRouter>
        )
    }
}
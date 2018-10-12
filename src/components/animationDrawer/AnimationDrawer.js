import React from 'react';

import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';

//import changeAnimation from "../../actions/animationActions";
import {connect} from "react-redux"; //used in mapDispatchToProps

const mapStateToProps = state => {
    return {
        animation: state.animation.animationName
    }
};

const mapDispatchToProps = dispatch => {
    return {
        changeAnimation: (animationName) =>
            dispatch({
                type: "CHANGE_ANIMATION",
                payload: animationName,
            })
    }
};

class AnimationDrawer extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            open: false
        }
    }

    render() {


        return (
            <div>
                <Button  onClick={() => {this.setState({open: true})}} style={{color: 'white'}}>Animation options</Button>
                <Drawer anchor="right" open={this.state.open} onClose={() => {this.setState({open: false})}}>
                    <div style={{width:'250px'}}>
                        <List component="nav" subheader={<ListSubheader component="div">Animation options</ListSubheader>}>
                            <ListItem button onClick={() => {this.props.changeAnimation("default")}}>
                                <ListItemText primary="default" />
                            </ListItem>
                            <ListItem button onClick={() => {this.props.changeAnimation("noClouds")}}>
                                <ListItemText primary="no clouds" />
                            </ListItem>
                            <ListItem button onClick={() => {this.props.changeAnimation("bgOnly")}}>
                                <ListItemText primary="background only" />
                            </ListItem>
                        </List>
                    </div>
                </Drawer>
            </div>
        )
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AnimationDrawer);
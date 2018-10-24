import { connect } from "react-redux";
import AnimationDrawer from './AnimationDrawer.js';
import { changeAnimation } from "../../actions/animationActions";

const mapStateToProps = state => {
    return {
        animation: state.animation.animationName
    }
};

const mapDispatchToProps = dispatch => {
    return {
        changeAnimation: (animationName) =>
            dispatch( changeAnimation(animationName) )
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AnimationDrawer);
import { connect } from "react-redux";
import PixiComponent from './PixiComponent.js';
import { changeText } from '../../actions/animationActions.js';

const mapStateToProps = state => {
    return {
        text: state.animation.animationText,
        animation: state.animation.animationName
    }
};

const mapDispatchToProps = dispatch => {
    return {
        changeText: (text) =>
            dispatch(changeText(text))
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PixiComponent);
import { connect } from "react-redux";
import PixiComponent from '../components/PixiComponent.js';

const mapStateToProps = state => {
    return {
        text: state.animation.animationText,
        animation: state.animation.animationName
    }
};

const mapDispatchToProps = dispatch => {
    return {
        changeText: (text) =>
            dispatch({
                type: "CHANGE_TEXT",
                payload: text
            })
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PixiComponent);
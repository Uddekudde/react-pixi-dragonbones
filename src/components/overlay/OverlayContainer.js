import { connect } from "react-redux";
import Overlay from './Overlay.js';
import { overlayActive } from '../../actions/overlayActions.js';

const mapStateToProps = state => {
    return {
        overlayIsActive: state.overlay.overlayIsActive
    }
};

const mapDispatchToProps = dispatch => {
    return {
        overlayActive: (isActive) =>
            dispatch(overlayActive(isActive))
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Overlay);
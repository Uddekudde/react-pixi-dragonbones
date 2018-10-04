import { connect } from "react-redux";
import Overlay from '../components/Overlay.js';
const mapStateToProps = state => {
    return {
        overlayIsActive: state.overlay.overlayIsActive
    }
};

const mapDispatchToProps = dispatch => {
    return {
        overlayActive: (isActive) =>
            dispatch({
                type: "OVERLAY_ACTIVE",
                payload: isActive,
            })
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Overlay);
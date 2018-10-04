import { connect } from "react-redux";
import TopBar from '../components/TopBar.js';

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
)(TopBar);
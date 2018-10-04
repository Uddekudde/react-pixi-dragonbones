export default function animationReducer(state={
    overlayIsActive: false,
}, action){

    switch (action.type) {
        case "OVERLAY_ACTIVE": {
            return {...state, overlayIsActive: action.payload}
        }
        default:{
            return {...state}
        }
    }
}
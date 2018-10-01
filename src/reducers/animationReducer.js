export default function animationReducer(state={
    animationText: "roffelkartoffel",
    animationName: "default"
}, action){

    switch (action.type) {
        case "CHANGE_TEXT": {
            return {...state, animationText: action.payload}
        }
        case "CHANGE_ANIMATION": {
            return {...state, animationName: action.payload}
        }
        default:{
            return {...state}
        }
    }
}
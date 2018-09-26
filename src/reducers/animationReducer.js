export default function animationReducer(state={
    animationText: "roffelkartoffel"
}, action){

    switch (action.type) {
        case "CHANGE_TEXT": {
            return {...state, animationText: action.payload}
        }
        default:{
            return {...state}
        }
    }
}
export function changeText(text){
    return {
        type: "CHANGE_TEXT",
        payload: text,
    }
}

export function changeAnimation(animationName){
    return {
        type: "CHANGE_ANIMATION",
        payload: animationName,
    }
}
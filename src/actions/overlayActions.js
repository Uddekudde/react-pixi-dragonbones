export function overlayActive(isActive){
    return {
        type: "OVERLAY_ACTIVE",
        payload: isActive,
    }
}
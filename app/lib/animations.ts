export const fadeRotateScaleTransition = {
    enter: {
        rotate: 180,
        opacity: 0,
        scale: 0.5,
        transition: { duration: 0.5 }
    },
    exit: {
        rotate: 0,
        opacity: 1,
        scale: 1,
        transition: { duration: 0.5 }
    }
}
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

export const breathingAnimation = {
    scale: [ 1, 0.8, 1 ],
    rotate: [ 0, 5, -5, 0 ], 
    opacity: [ 1, 0.5, 1 ],
    transition: {
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut"
    }
}
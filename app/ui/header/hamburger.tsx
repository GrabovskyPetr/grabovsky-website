import React, { useCallback } from "react"
import { useGlobalContext } from "@/app/lib/globalContext"
import throttle from "lodash/throttle"
import { motion } from "framer-motion"
import { fadeRotateScaleTransition } from "@/app/lib/animations"
import { BiMenu } from "react-icons/bi"
import { GiCrossMark } from "react-icons/gi"

const Hamburger: React.FC = () => {
    const { 
        isScreenSmall, 
        isScrolledTop, 
        isMobileNavVisible, 
        setIsMobileNavVisible 
    } = useGlobalContext()

    const handleToggleMenu = useCallback(throttle(() => {
        setIsMobileNavVisible( prevState => !prevState )
    }, 500), [])

    if ( !isScreenSmall ) return null

    return (
        <button
            onClick={ handleToggleMenu }
            className={`${ isScrolledTop || isMobileNavVisible ? "w-12 h-12" : "w-10 h-10" } 
                        flex items-center justify-center z-20
            `}
            aria-label={ isMobileNavVisible ? "Skrýt menu" : "Zobrazit menu" }                                 
        >
            <motion.div
                initial="exit"
                variants={ fadeRotateScaleTransition }
                animate={ isMobileNavVisible ? "enter" : "exit" }
                className="absolute"
            >
                <BiMenu 
                    className={`${ isMobileNavVisible || isScrolledTop ? "text-6xl" : "text-5xl" }
                                transition-all duration-500
                                text-secondary ease-in-out
                    `} 
                />
            </motion.div>
            <motion.div
                initial="enter"
                variants={ fadeRotateScaleTransition }
                animate={ isMobileNavVisible ? "exit" : "enter" }
                className="absolute"
            >
                <GiCrossMark 
                    className="text-5xl text-accent-three 
                               transition-all 
                               duration-500 ease-in-out"                    
                />
            </motion.div>
        </button>
    )
}

export default React.memo( Hamburger )
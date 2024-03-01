import React, { useCallback } from "react"
import { useGlobalContext } from "@/app/lib/globalContext"
import throttle from "lodash/throttle"
import { motion } from "framer-motion"
import { fadeRotateScaleTransition } from "@/app/lib/animations"
import { BiMenu } from "react-icons/bi"
import { GiCrossMark } from "react-icons/gi"
import clsx from "clsx"

const Hamburger: React.FC = () => {
    const { 
        isScreenSmall, scrollPosition, 
        isMobileNavVisible, setIsMobileNavVisible 
    } = useGlobalContext()

    const handleToggleMenu = useCallback(throttle((e: React.MouseEvent) => {
        e.stopPropagation()
        setIsMobileNavVisible( prevState => !prevState )
    }, 500), [])

    if ( !isScreenSmall ) return null

    return (
        <button
            onClick={ handleToggleMenu }
            aria-label={ isMobileNavVisible ? "Skrýt menu" : "Zobrazit menu" }                                 
            className={clsx(
                "flex items-center justify-center", 
                {
                    "w-12 h-12": scrollPosition === "top" || 
                                 scrollPosition === "bottom" || 
                                 isMobileNavVisible,

                    "w-10 h-10": scrollPosition === "middle"
                }                       
        )}>
            <motion.div
                initial="exit"
                variants={ fadeRotateScaleTransition }
                animate={ isMobileNavVisible ? "enter" : "exit" }
                className="absolute"
            >
                <BiMenu 
                    className={clsx(
                        "transition-all duration-500 text-secondary ease-in-out",
                        {
                            "text-6xl": isMobileNavVisible || 
                                        scrollPosition === "top" || 
                                        scrollPosition === "bottom",
                            
                            "text-5xl": scrollPosition === "middle"
                        }
                )}/>
            </motion.div>
            <motion.div
                initial="enter"
                variants={ fadeRotateScaleTransition }
                animate={ isMobileNavVisible ? "exit" : "enter" }
                className="absolute"
            >
                <GiCrossMark 
                    className={clsx(
                        "text-5xl text-accent-three transition-all",
                        "duration-500 ease-in-out"
                )}/>
            </motion.div>
        </button>
    )
}

export default React.memo( Hamburger )
import React from "react"
import { useMobileNav } from "@/app/lib/mobileNavContext"
import { motion } from "framer-motion"
import { fadeRotateScaleTransition } from "@/app/lib/animations"
import { BiMenu } from "react-icons/bi"
import { GiCrossMark } from "react-icons/gi"

interface HamburgerProps {
    isShrunk: boolean
}

const Hamburger: React.FC<HamburgerProps> = ({ isShrunk }) => {
    const { handleToggleMobileNav, isMobileNavOpen } = useMobileNav()

    return (
        <button
            onClick={ handleToggleMobileNav } 
            className={`${ isShrunk ? "w-10 h-10" : "w-12 h-12" }
                        flex items-center 
                        justify-center`}
            aria-label={ isMobileNavOpen ? "Skrýt navigaci" : "Zobrazit navigaci" }                     
        >
            <motion.div
                initial="exit"
                animate={ isMobileNavOpen ? "enter" : "exit" }
                variants={ fadeRotateScaleTransition }
                className="absolute"
            >
                <BiMenu 
                    className={`${ isShrunk ? "text-5xl" : "text-6xl" } 
                                text-secondary transition-all 
                                duration-500 ease-in-out`
                    } 
                />
            </motion.div>
            <motion.div
                initial="enter"
                animate={ isMobileNavOpen ? "exit" : "enter" }
                variants={ fadeRotateScaleTransition }
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
import { motion } from "framer-motion"
import { BiMenu } from "react-icons/bi"
import { GiCrossMark } from "react-icons/gi"

interface HamburgerProps {
    handleToggleMobileNav: () => void
    isMobileNavOpen: boolean
}

const Hamburger: React.FC<HamburgerProps> = ({ handleToggleMobileNav, isMobileNavOpen }) => {
    const iconVariants = {
        opened: {
            rotate: 180,
            opacity: 0,
            scale: 0.5,
            transition: { duration: 0.5 }
        },
        closed: {
            rotate: 0,
            opacity: 1,
            scale: 1,
            transition: { duration: 0.5 }
        }
    }

    return (
        <button
            onClick={ handleToggleMobileNav } 
            className="w-10 h-10 
                       flex items-center 
                       justify-center"                     
        >
            <motion.div
                initial="closed"
                animate={ isMobileNavOpen ? "opened" : "closed" }
                variants={ iconVariants }
                className="absolute"
            >
                <BiMenu 
                    className="text-6xl text-secondary" 
                />
            </motion.div>
            <motion.div
                initial="opened"
                animate={ isMobileNavOpen ? "closed" : "opened" }
                variants={ iconVariants }
                className="absolute"
            >
                <GiCrossMark 
                    className="text-5xl text-accent-three"
                />
            </motion.div>
        </button>
    )
}

export default Hamburger
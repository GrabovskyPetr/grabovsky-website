"use client"

import { useGlobalContext } from "@/app/lib/globalContext"
import { useSpring, animated } from 'react-spring';
import Logo from "./logo"
import Hamburger from "./hamburger"
import MobileNav from "./mobileNav"

const Header: React.FC = () => {
    const { isScreenSmall, isScrolledTop, isMobileNavVisible, setIsMobileNavVisible } = useGlobalContext()

    const headerAnimation = useSpring({
        to: { transform: 'translateX(0%)', opacity: 1 },
        from: { transform: 'translateX(-100%)', opacity: 0 },
        config: {
            tension: 200, // Zvyšte pro více "pružnosti"
            friction: 12, // Snížení zvýší "bounce" efekt
            mass: 1, // Hmotnost objektu, můžete experimentovat s touto hodnotou
        }
    });

    const handleHeaderClick = () => {
        if ( isMobileNavVisible ) {
            setIsMobileNavVisible( false )
        }
    }

    const headerHeight = isMobileNavVisible
        ? "h-screen"
        : isScreenSmall && !isScrolledTop
        ? "h-14"
        : "h-24"

    const contentDivHeigth = isMobileNavVisible
        ? "h-24"
        : isScreenSmall && !isScrolledTop
        ? "h-14"
        : "h-24"

    return (
        <animated.header
            style={headerAnimation}
            onClick={ handleHeaderClick }
            className={`${ headerHeight }
                        w-full fixed transition-all 
                        duration-300 ease-in-out 
                        flex items-center justify-center 
                        bg-primary-alpha backdrop-blur-sm
                        overflow-hidden z-10            
            `}
        >
            <div className="w-full max-w-5xl h-full px-3 flex flex-col items-center">
                <div 
                    className={`${ contentDivHeigth }
                                w-full transition-all duration-300 
                                ease-in-out py-1 flex justify-between
                                items-center
                    `}
                >
                    <Logo />
                    <Hamburger />
                </div>
                <MobileNav />
            </div>
        </animated.header>
    )
}

export default Header
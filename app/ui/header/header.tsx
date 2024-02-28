"use client"

import { useGlobalContext } from "@/app/lib/globalContext"
import Logo from "./logo"
import Hamburger from "./hamburger"
import MobileNav from "./mobileNav"

const Header: React.FC = () => {
    const { isScreenSmall, isScrolledTop, isMobileNavVisible } = useGlobalContext()

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
        <header
            className={`${ headerHeight }
                        w-full fixed transition-all 
                        duration-300 ease-in-out 
                        flex items-center justify-center 
                        bg-primary-alpha backdrop-blur-sm
                        overflow-hidden                      
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
        </header>
    )
}

export default Header
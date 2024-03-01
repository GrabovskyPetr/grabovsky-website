"use client"

import { useGlobalContext } from "@/app/lib/globalContext"
import clsx from "clsx"
import Logo from "./logo"
import Hamburger from "./hamburger"
import MobileNav from "./mobileNav"

const Header: React.FC = () => {
    const { 
        isScreenSmall, scrollPosition, isMobileNavVisible, setIsMobileNavVisible
    } = useGlobalContext()

    const handleHeaderClick = () => {
        if ( isMobileNavVisible ) {
            setIsMobileNavVisible( false )
        } 
    }

    return (
        <header
            onClick={ handleHeaderClick }
            className={clsx(
                "w-full fixed transition-all duration-500 ease-in-out",
                "flex items-center justify-center bg-primary-alpha",
                "backdrop-blur-sm overflow-hidden z-10",
                {
                    "h-screen": isMobileNavVisible && isScreenSmall,

                    "h-24": scrollPosition === "top" || 
                            scrollPosition === "bottom" || 
                            !isScreenSmall,

                    "h-14": isScreenSmall && scrollPosition === "middle"
                }
        )}>
            <div 
                className={clsx(
                    "w-full max-w-5xl h-full px-3", 
                    "flex flex-col items-center"
            )}>
                <div 
                    className={clsx(
                        "w-full transition-all duration-500 ease-in-out",
                        "py-1 flex justify-between items-center",
                        {
                            "h-24": isMobileNavVisible || 
                                    scrollPosition === "top" || 
                                    scrollPosition === "bottom" || 
                                    !isScreenSmall,

                            "h-14": isScreenSmall && scrollPosition === "middle"
                        }
                )}>
                    <Logo />
                    <Hamburger />
                </div>
                <MobileNav />
            </div>
        </header>
    )
}

export default Header
"use client"

import { useState, useEffect } from "react"
import { useMobileNav } from "@/app/lib/mobileNavContext"
import { throttle } from "lodash"
import Logo from "./logo"
import Hamburger from "./hamburger"

const Header: React.FC = () => {
    const { isMobileNavOpen } = useMobileNav()
    const [ isShrunk, setShrunk ] = useState<boolean>( false )    

    useEffect(() => {
        const checkShouldBeShrunk = () => {
            return window.scrollY > 100 && window.innerWidth < 640
        }
    
        const handleScroll = throttle(() => {
            setShrunk( checkShouldBeShrunk() )
        }, 500)
    
        if (!isMobileNavOpen) {
            window.addEventListener( "scroll", handleScroll )    
            setShrunk( checkShouldBeShrunk() )
        }

        return () => {
            handleScroll.cancel()
            window.removeEventListener( "scroll", handleScroll )
        }
    }, [ isMobileNavOpen ])

    useEffect(() => {
        if ( isMobileNavOpen ) {
            document.body.classList.add( "overflow-hidden" )
        } else {
            document.body.classList.remove( "overflow-hidden" )
        }

        return () => {
            document.body.classList.remove("overflow-hidden")
        }
    }, [ isMobileNavOpen ])

    const headerHeightClass = isMobileNavOpen ? "h-screen" : isShrunk ? "h-14" : "h-24"

    return (
        <header 
            className={ `${ headerHeightClass } 
                         w-full fixed 
                         transition-all
                         duration-300 ease-in-out 
                         flex items-center justify-center
                         bg-primary-alpha backdrop-blur-sm` 
            }
        >
            {/* Kontejner */}
            <div 
                className="w-full max-w-5xl 
                           h-full px-3"
            >

                {/* Logo, navigace, tlačítko */}
                <div 
                    className={`${ isShrunk ? "h-14" : "h-24" } 
                                 w-full transition-all duration-300
                                 ease-in-out py-1 flex
                                 justify-between items-center`
                    }
                >
                    <Logo
                        firstColorClass="fill-accent-one"
                        secondColorClass={ isMobileNavOpen ? "fill-accent-three" 
                                                           : "fill-accent-two" 
                                         }
                    />
                    <Hamburger isShrunk={ isShrunk } />
                </div>
            </div>
        </header>
    )
}

export default Header
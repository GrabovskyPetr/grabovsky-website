"use client"

import { useState, useEffect } from "react"
import { useMobileNav } from "@/app/lib/mobileNavContext"
import { throttle } from "lodash"
import Logo from "./logo"
import Hamburger from "./hamburger"

const Header: React.FC = () => {
    const { isMobileNavOpen } = useMobileNav()
    const [ isShrunk, setShrunk ] = useState<boolean>( false )

    // Funkce pro kontrolu, zda má být hlavička zmenšena.
    const checkShouldBeShrunk = () => {
        return window.scrollY > 100 && window.innerWidth < 640
    }

    useEffect(() => {
        // Funkce pro zpracování scrollování.
        const handleScroll = throttle(() => {
            if ( !isMobileNavOpen ) {
                setShrunk( checkShouldBeShrunk() )
            }
        }, 500)

        // Přidávání posluchače události, pokud navigace není otevřena.
        if ( !isMobileNavOpen ) {
            window.addEventListener( "scroll", handleScroll )
        }

        // Nastavování stavu zmenšení při změně isMobileNavOpen.
        if ( isMobileNavOpen ) {
            setShrunk( false )
        } else {
            setShrunk( checkShouldBeShrunk() )
        }

        // Čištění na odpojení komponenty nebo při změně isMobileNavOpen.
        return () => {
            handleScroll.cancel();
            window.removeEventListener( "scroll", handleScroll )
        };
    }, [ isMobileNavOpen ]); // Závislosti useEffectu.

    return (
        <header 
            className={`${ isShrunk ? "h-14" : "h-24" }
                        w-full p-1
                        overflow-hidden
                        bg-primary-alpha flex
                        fixed backdrop-blur-sm
                        justify-center items-center
                        transition-all duration-500
                        ease-in-out`
            }
        >
            <div 
                className="w-full max-w-5xl 
                           h-full flex px-3
                           justify-between items-center"
            >
                <div 
                    className="flex items-center 
                               justify-center"                    
                >
                    <Logo
                        widthClass={ isShrunk ? "w-12" : "w-20" }
                        firstColorClass="fill-accent-one"
                        secondColorClass={ isMobileNavOpen ? "fill-accent-three" : "fill-accent-two" }
                                         
                    />
                </div>
                <nav className="w-fit h-fit">

                </nav>
                <Hamburger isShrunk={ isShrunk } />                
            </div>
        </header>
    )
}

export default Header
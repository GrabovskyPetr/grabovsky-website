"use client"

import Logo from "./logo"
import Hamburger from "./hamburger"
import { useRootContext } from "@/app/layout"

const Header: React.FC = () => {
    const { isScrolledTop, isScreenSmall, isMobileNavVisible } = useRootContext()

    return (
        <header
            className={`${ isMobileNavVisible ? "h-screen" : 
                           isScreenSmall && !isScrolledTop ? "h-14" : "h-24" 
                        }
                        w-full fixed transition-all 
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
                    className={`${ isMobileNavVisible ? "h-24" : 
                                   isScreenSmall && !isScrolledTop ? "h-14" : "h-24" 
                                }
                                w-full transition-all
                                duration-300 ease-in-out
                                py-1 flex justify-between
                                items-center`
                    }
                >
                    <Logo
                        firstColorClass="fill-accent-one"
                        secondColorClass={ "fill-accent-three" }
                    />
                    <Hamburger />
                </div>
            </div>
        </header>
    )
}

export default Header
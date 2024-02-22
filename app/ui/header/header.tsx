import { useState, useEffect } from "react"
import Logo from "./logo"
import Hamburger from "./hamburger"

interface HeaderProps {
    handleToggleMobileNav: () => void
    isMobileNavOpen: boolean
}

const Header: React.FC<HeaderProps> = ({ handleToggleMobileNav, isMobileNavOpen }) => {
    const [ isShrunk, setShrunk ] = useState<boolean>( false )

    useEffect(() => {
        const handleScroll = () => {
            setShrunk( window.scrollY > 100 )
        }

        window.addEventListener( "scroll", handleScroll )

        return () => {
            window.removeEventListener( "scroll", handleScroll )
        }
    }, [])

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
                    className={`${ isShrunk ? "w-12" : "w-20" }
                                flex items-center 
                                justify-center
                                transition-all duration-500
                                ease-in-out`
                    }
                >
                    <Logo 
                        firstColor="var(--color-accent-one)"
                        secondColor={isMobileNavOpen ? "var(--color-accent-three)" 
                                                     : "var(--color-accent-two)"
                                    }
                    />
                </div>
                <nav className="w-fit h-fit">

                </nav>
                <Hamburger 
                    handleToggleMobileNav={ handleToggleMobileNav } 
                    isMobileNavOpen={ isMobileNavOpen }
                    isShrunk={ isShrunk }
                />                
            </div>
        </header>
    )
}

export default Header
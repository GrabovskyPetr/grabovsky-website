import Logo from "./logo"
import Hamburger from "./hamburger"

interface HeaderProps {
    handleToggleMobileNav: () => void
    isMobileNavOpen: boolean
}

const Header: React.FC<HeaderProps> = ({ handleToggleMobileNav, isMobileNavOpen }) => {
    return (
        <header 
            className="w-full h-24 p-1
                       overflow-hidden
                       bg-primary-alpha flex
                       fixed backdrop-blur-sm
                       justify-center items-center"
        >
            <div 
                className="w-full max-w-5xl 
                           h-full flex px-3
                           justify-between items-center"
            >
                <div 
                    className="w-20 flex 
                               items-center 
                               justify-center"
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
                />                
            </div>
        </header>
    )
}

export default Header
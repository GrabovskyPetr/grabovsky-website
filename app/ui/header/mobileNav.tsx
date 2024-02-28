import { useGlobalContext } from "@/app/lib/globalContext"
import { usePathname } from "next/navigation"
import { useTrail, animated } from "react-spring"
import MobileLink from "./mobileLink"
import navItems from "@/app/lib/navItems"

const MobileNav: React.FC = () => {
    const { setIsMobileNavVisible, isMobileNavVisible } = useGlobalContext()
    const pathName = usePathname()

    return (
        <>
            {isMobileNavVisible && (
                <div
                    className="fixed inset-0 z-10"
                    onClick={() => setIsMobileNavVisible( false )}
                >                    
                </div>
            )}
            <nav className="w-full h-full flex items-center justify-center overflow-hidden">
                <ul className="w-full space-y-5">
                    {navItems.map(({ name, href, Icon }) => (
                        <li key={ name } className="flex items-center justify-center">
                            <MobileLink name={ name } href={ href } Icon={ Icon } isActive={ pathName === href } />
                        </li>
                    ))}
                </ul>
            </nav>
        </>     
    )
}

export default MobileNav
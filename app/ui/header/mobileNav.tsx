import { useGlobalContext } from "@/app/lib/globalContext"
import { usePathname } from "next/navigation"
import { useTrail, animated } from "react-spring"
import MobileLink from "./mobileLink"
import navItems from "@/app/lib/navItems"

const MobileNav: React.FC = () => {
    const { isMobileNavVisible } = useGlobalContext()
    const pathName = usePathname()

    return (
        <nav className={`flex justify-center items-center w-fit h-full`}>
            <ul className="space-y-4 w-full">
                {navItems.map(({ name, href, Icon }) => (
                    <li key={ name } className="w-full flex items-center justify-start">
                        <MobileLink name={ name } href={ href } Icon={ Icon } isActive={ pathName === href } />
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default MobileNav
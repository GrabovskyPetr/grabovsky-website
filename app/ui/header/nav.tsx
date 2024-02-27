import { useGlobalContext } from "@/app/lib/globalContext"
import Link from "next/link"
import navItems from "@/app/lib/navItems"

const Nav: React.FC = () => {
    const { isMobileNavVisible } = useGlobalContext()

    return (
        <nav className="flex justify-center items-center w-full h-full">
            <ul className="bg-red-500">
                {navItems.map(({ name, href, icon: Icon }) => (
                    <li key={name}>
                        <Link href={href}>
                            <div className="bg-pink-500 flex">
                                <div>
                                    { <Icon /> }
                                </div>
                                <div>
                                    { name }
                                </div>
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Nav
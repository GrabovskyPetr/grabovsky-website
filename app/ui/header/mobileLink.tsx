import Link from "next/link"
import { clsx } from "clsx"
import { silkscreen } from "../fonts" 
import { IconType } from "react-icons"
import { useGlobalContext } from "@/app/lib/globalContext"

interface MobileLinkProps {
    name: string
    href: string
    Icon: IconType
    isActive: boolean
}

const MobileLink: React.FC<MobileLinkProps> = ({ name, href, Icon, isActive }) => {
    const { isMobileNavVisible, setIsMobileNavVisible } = useGlobalContext()

    const handleMobileLinkClick = (e: React.MouseEvent) => {
        e.stopPropagation()
        setTimeout(() => {
            setIsMobileNavVisible( false )
        }, 300)
    }

    return (
        <Link 
            onClick={ handleMobileLinkClick }
            href={ href }
            className={clsx(
                isActive ? "scale-110 font-bold tracking-widest" : "scale-100 tracking-wider",
                isMobileNavVisible ? "opacity-100" : "opacity-0",
                `${ silkscreen.className } flex space-x-5 transition-all duration-300 ease-in-out z-20`
        )}>
            <Icon className={clsx(
                isActive ? "text-accent-one" : "text-secondary-darker",
                "w-7 h-7 flex items-center justify-center"
            )}/>
            <span className={clsx(
                isActive ? "text-secondary" : "text-secondary-darker",
                "flex items-center justify-start w-20 uppercase"
            )}>
                { name }
            </span>
        </Link>
    )
}

export default MobileLink
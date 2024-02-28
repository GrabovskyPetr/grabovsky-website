import Link from "next/link"
import { clsx } from "clsx"
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

    const handleMobileLinkClick = () => {
        setTimeout(() => {
            setIsMobileNavVisible( false )
        }, 300)
    }

    return (
        <Link 
            onClick={ handleMobileLinkClick }
            href={ href }
            className={clsx(
                isActive ? "scale-110 font-bold" : "scale-100",
                "flex space-x-5 z-20 transition-all duration-300 ease-in-out"
        )}>
            <Icon className={clsx(
                isActive ? "text-accent-one" : "text-secondary-darker",
                "w-7 h-7 flex items-center justify-center"
            )}/>
            <span className={clsx(
                isActive ? "text-secondary" : "text-secondary-darker",
                "flex items-center justify-start w-20"
            )}>
                { name }
            </span>
        </Link>
    )
}

export default MobileLink
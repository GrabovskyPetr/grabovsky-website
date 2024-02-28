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
                isActive ? "scale-125" : "scale-100",
                isMobileNavVisible ? "opacity-100" : "opacity-0",                
                "flex items-center space-x-5 z-20", 
                "transition-all duration-300 ease-in-out"
        )}>
            <div className={clsx(
                isActive ? "text-accent-one" : "text-accent-three",
                "w-10 h-10 flex items-center", 
                "justify-center transition-all duration-300", 
                "ease-in-out text-2xl"
            )}>
                <Icon />
            </div>            
            <div className={clsx(
                isActive ? "text-secondary" : "text-secondary-darker",                
                "text-secondary font-bold transition-all",
                "duration-300 ease-in-out text-xl"
            )}>
                { name }
            </div>
        </Link>
    )
}

export default MobileLink
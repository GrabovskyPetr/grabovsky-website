"use client"

import { useGlobalContext } from "@/app/lib/globalContext"
import { clsx } from "clsx"

const Footer: React.FC = () => {
    const { isMobileNavVisible } = useGlobalContext()

    return (
        <footer className={clsx(
            "w-full bg-primary-alpha transition-all duration-500 ease-in-out",
            isMobileNavVisible ? "opacity-0 h-0" : "opacity-100 h-20"
        )}>
            <div className="text-secondary">
                Toto je element footer
            </div>
        </footer>
    )
}

export default Footer
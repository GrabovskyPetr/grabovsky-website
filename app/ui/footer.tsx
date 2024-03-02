"use client"

import { useGlobalContext } from "@/app/lib/globalContext"
import clsx from "clsx"

const Footer: React.FC = () => {
    const { isMobileNavVisible, scrollPosition } = useGlobalContext()

    return (
        <footer className={clsx(
            "w-full bg-primary-alpha transition-all", 
            "duration-500 ease-in-out fixed bottom-0",
            {
                "h-0": isMobileNavVisible || 
                       scrollPosition === "middle",

                "h-14": !isMobileNavVisible && 
                        (scrollPosition === "top" || scrollPosition === "bottom"),
            }
        )}>
            <div className="text-white text-center flex items-center justify-center">
                Lorem ipsum dolor sit amet.
            </div>
        </footer>
    )
}

export default Footer
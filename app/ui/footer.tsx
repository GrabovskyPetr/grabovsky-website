"use client"

import { useGlobalContext } from "@/app/lib/globalContext"
import clsx from "clsx"

const Footer: React.FC = () => {
    const { isMobileNavVisible, isScrolledTop } = useGlobalContext()

    let footerClass
    
    if ( isScrolledTop && !isMobileNavVisible ) {
        footerClass = "fixed bottom-0 h-14"
    }
    else{
        footerClass = "fixed bottom-0 h-0"
    }

    return (
        <footer className={clsx(
            footerClass,
            "flex justify-center items-center bg-primary-alpha w-full transition-all duration-500 ease-in-out"
        )}>
            <div className="text-white text-center">
                Lorem ipsum dolor sit amet.
            </div>
        </footer>
    )
}

export default Footer
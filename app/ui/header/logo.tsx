import React from "react"
import { logoPaths } from "./logoPaths"
import { breathingAnimation } from "@/app/lib/animations"
import { motion } from "framer-motion"

interface LogoProps {
    firstColorClass: string
    secondColorClass: string
}

const Logo: React.FC<LogoProps> = ({ firstColorClass, secondColorClass }) => { 
    const getColorClass = ( colorClassKey: string ) => {
        return colorClassKey === "firstColorClass" ? firstColorClass 
                                                   : secondColorClass
    }

    return (
        <motion.svg
            viewBox="0 0 1909.09 2000"
            initial={{ scale: 1 }}
            animate={ breathingAnimation }
            style={{ shapeRendering: "geometricPrecision" }}
            className="h-full"
        >         
            { logoPaths.map(( path, index)  => (                
                <path 
                    key={ index } 
                    d={ path.d } 
                    className={`${ getColorClass( path.colorClass ) } 
                                transition-colors 
                                duration-500 ease-in-out`
                    } 
                />
            ))}           
        </motion.svg>
    )
}

export default React.memo( Logo )
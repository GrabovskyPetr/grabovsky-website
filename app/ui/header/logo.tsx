import React from "react"
import { logoPaths } from "./logoPaths"
import { breathingAnimation } from "@/app/lib/animations"  // Definice animace.
import { motion } from "framer-motion"

/**
 * Rozhraní pro vlastnosti komponenty logo. * 
 * Očekává se použití Tailwind třídy pro barvy výplně.
 * Tyto vlastnosti umožňují dynamicky obarvit různé části loga.
 */
interface LogoProps {
    firstColorClass: string  // Tailwind třída pro první barvu např. 'fill-slate-200'.
    secondColorClass: string  // Tailwind třída pro druhou barvu.
}

/**
 * Komponenta Logo zobrazuje SVG logo s dynamicky nastavitelnými barvami
 * a animací, která symuluje dýchání. Logo mění svou velikost, rotaci a
 * průhlednost podle importované definice animace, což přináší dynamický
 * vizuální efekt.
 * 
 * Props umožňují dynamické obarvení jednotlivých částí loga pomocí
 * Tailwind CSS tříd, což zvyšuje flexibilitu komponenty v rámci 
 * různých designových schémat nebo stavů aplikace.* 
 * 
 * Použití React.memo zajišťuje, že komponenta se znovu nerenderuje, 
 * pokud se její props nezmění, což může zvýšit výkon aplikace. 
 */
const Logo: React.FC<LogoProps> = ({ firstColorClass, secondColorClass }) => {

    /**
     * Dynamicky vybírá Tailwind třídu pro barvu na základě klíče.
     * Tato funkce umožňuje flexibilní aplikaci barvy na části SVG,
     * podle aktualních props komponenty.
     */    
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

            {/**
             * Renderuje jednotlivé části SVG loga s dynamicky aplikovanými barvami.
             * Každá část loga může mít svou vlastní barvu podle definice v 'logoPaths'.
             */}            
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

export default React.memo(Logo)  // Použití React.memo pro optimalizaci výkonu.
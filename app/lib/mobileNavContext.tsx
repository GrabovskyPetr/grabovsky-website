"use client"

/**
 * Definuje kontext a hook pro správu stavu zobrazena/skryta mobilní navigace.
 * Umožňuje centrální správu tohoto stavu a jeho snadné sdílení mezi komponentami,
 * které potřebují reagovat na změny stavu mobilní navigace.
 */

import { createContext, useContext, useState } from "react"

// Typová definice pro hodnoty poskytované MobileNavContextem.
interface MobileNavContextType {
    isMobileNavOpen: boolean  // Určuje, zda je mobilní navigace aktuálně zobrazena.
    handleToggleMobileNav: () => void  // Funkce pro přepnutí stavu mobilní navigace.
}

// Vytváří kontext s výchozí hodnotou 'undefined' pro zachycení případů nesprávného použití.
const MobileNavContext = createContext<MobileNavContextType | undefined>( undefined )

/**
 * Hook umožňující komponentám přístup k stavu a ovládací funkci mobilní navigace.
 * Vyžaduje, aby byl použit v rámci stromu komponent obalených MobileNavProviderem.
 * Vyhazuje vyjímku, pokud je použit mimo kontext MobileNavProvideru. 
 */
export const useMobileNav = () => {
    const context = useContext( MobileNavContext )

    if ( context === undefined ) {
        throw new Error( "useMobileNav musí být použit v rámci MobileNavProvider" )
    }

    return context
}

// Props definice pro MobileNavProvider, očekává jakékoliv Reactové uzly jako potomky.
interface MobileNavContextProps {
    children: React.ReactNode  // Potomci, kteří mají přístup k MobileNavContextu.
}

/**
 * Poskytovatel kontextu, který udržuje stav mobilní navigace a poskytuje ho svým potomkům.
 * Umožňuje jednoduché sdílení a správu stavu zobrazena/skryta mobilní navigace
 * napříč různými částmi aplikace.
 */
export const MobileNavProvider: React.FC<MobileNavContextProps> = ({ children }) => {
    const [ isMobileNavOpen, setIsMobileNavOpen ] = useState<boolean>( false )

    // Handler pro změnu stavu mobilní navigace.
    const handleToggleMobileNav = () => {
        setIsMobileNavOpen( prevState => !prevState )
    }

    // Propaguje stav a funkce pro ovládání stavu do kontextu.
    return (
        <MobileNavContext.Provider value={{ isMobileNavOpen, handleToggleMobileNav }}>
            { children }
        </MobileNavContext.Provider>
    )
}
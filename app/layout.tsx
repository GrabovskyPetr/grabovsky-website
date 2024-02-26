"use client"

import "./ui/globals.css"
import { createContext, useContext, useEffect, useState, useCallback } from "react"
import { throttle } from "lodash"
import { inter } from "./ui/fonts"
import Header from "./ui/header/header"

interface RootContextInterface {
  isScrolledTop: boolean
  setIsScrolledTop: React.Dispatch<React.SetStateAction<boolean>>
  isScreenSmall: boolean
  setIsScreenSmall: React.Dispatch<React.SetStateAction<boolean>>
  isMobileNavVisible: boolean
  setIsMobileNavVisible: React.Dispatch<React.SetStateAction<boolean>>
}

export const RootContext = createContext<RootContextInterface | undefined>( undefined )

export const useRootContext = () => {
  const context = useContext( RootContext )

  if ( context === undefined ) {
    throw new Error( "useRootContext musí být použit v rámci RootLayout" )
  }

  return context
}

interface RootLayoutProps {
  children: React.ReactNode
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  const [ isScrolledTop, setIsScrolledTop ] = useState<boolean>( true )
  const [ isScreenSmall, setIsScreenSmall ] = useState<boolean>( false )
  const [ isMobileNavVisible, setIsMobileNavVisible ] = useState<boolean>( false )

  const handleResize = useCallback(throttle(() => {
    const isScreenSmallNow = window.innerWidth < 640

    setIsScreenSmall( isScreenSmallNow )

    if ( !isScreenSmallNow ) {
      setIsMobileNavVisible( false )
    }
  }, 500), [])

  const handleScroll = useCallback(throttle(() => {
    const isScrolledTopNow = window.scrollY < 50
    
    setIsScrolledTop( isScrolledTopNow )
  }, 500), [])

  useEffect(() => {
    handleResize()
    handleScroll()

    window.addEventListener( 'scroll', handleScroll )
    window.addEventListener( 'resize', handleResize )

    return () => {
      handleScroll.cancel()
      handleResize.cancel()
      window.removeEventListener( 'scroll', handleScroll )
      window.removeEventListener( 'resize', handleResize )
    }
  }, [])

  useEffect(() => {
    if ( isMobileNavVisible ) {
      document.body.classList.add( "overflow-hidden" )
    } else {
      document.body.classList.remove( "overflow-hidden" )
    }
  }, [ isMobileNavVisible ])

  return (
    <RootContext.Provider 
      value={{ isScrolledTop, 
               setIsScrolledTop, 
               isScreenSmall, 
               setIsScreenSmall, 
               isMobileNavVisible, 
               setIsMobileNavVisible 
      }}
    >
      <html lang="cs">
        <body 
          className={`${ inter.className }
                      w-full min-h-screen
                      flex flex-col
                      items-center text-primary
                      overflow-x-hidden antialiased
                      bg-primary bg-primary-size
                      bg-primary-position bg-fixed
                      bg-no-repeat bg-secondary
                      sm:bg-cover sm:bg-center`
          }
        >
          <Header />
          <main 
            className="max-w-5xl px-3 
                       pb-1 pt-24"
          >
            { children }
          </main>
        </body>
      </html>
    </RootContext.Provider>
  )
}

export default RootLayout
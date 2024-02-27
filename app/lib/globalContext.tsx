"use client"

import throttle from "lodash/throttle"
import {
    createContext, useContext, useState, Dispatch,
    SetStateAction, ReactNode, useEffect, useCallback 
} from "react"

interface GlobalContextInterface {
    isScrolledTop: boolean
    isScreenSmall: boolean
    isMobileNavVisible: boolean
    setIsMobileNavVisible: Dispatch<SetStateAction<boolean>>
}

const GlobalContext = createContext<GlobalContextInterface>({
    isScrolledTop: true,
    isScreenSmall: false,
    isMobileNavVisible: false,
    setIsMobileNavVisible: () => {}
})

export const GlobalContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [ isScrolledTop, setIsScrolledTop ] = useState( true )
  const [ isScreenSmall, setIsScreenSmall ] = useState( false )
  const [ isMobileNavVisible, setIsMobileNavVisible ] = useState( false )

  const handleScreenResize = useCallback(throttle(() => {
    const checkIsScreenSmall = window.innerWidth < 640

    setIsScreenSmall( checkIsScreenSmall )

    if ( !checkIsScreenSmall ) {
      setIsMobileNavVisible( false )
    }
  }, 100), [])

  const handleScroll = useCallback(throttle(() => {
    setIsScrolledTop( window.scrollY < 50 )
  }, 100), [])

  useEffect(() => {
    if ( typeof window !== "undefined" ) {
      window.addEventListener( "resize", handleScreenResize )

      handleScreenResize()

      return () => window.removeEventListener( "resize", handleScreenResize )
    }
  }, [ handleScreenResize ])

  useEffect(() => {
    if ( typeof window !== "undefined") {
      window.addEventListener( "scroll", handleScroll )

      handleScroll()

      return () => window.removeEventListener( "scroll", handleScroll )
    }
  }, [ handleScroll ])

  useEffect(() => {
    if ( typeof window !== "undefined" ) {
      if ( isMobileNavVisible ) {
        document.body.classList.add( "overflow-hidden" )
      } else {
        document.body.classList.remove( "overflow-hidden" )
      }
    }
  }, [isMobileNavVisible])

  return (
    <GlobalContext.Provider
        value={{
            isScrolledTop,
            isScreenSmall,
            isMobileNavVisible, 
            setIsMobileNavVisible
        }}
    >
        { children }
    </GlobalContext.Provider>
  )
}

export const useGlobalContext = (): GlobalContextInterface => {
    return useContext( GlobalContext )
}
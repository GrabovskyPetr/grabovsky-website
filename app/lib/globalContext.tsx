"use client"

import throttle from "lodash/throttle"
import { ScrollPosition } from "./definitions"
import {
    createContext, useContext, useState, Dispatch,
    SetStateAction, ReactNode, useEffect, useCallback 
} from "react"

interface GlobalContextInterface {
    scrollPosition: ScrollPosition
    isScreenSmall: boolean
    isMobileNavVisible: boolean
    setIsMobileNavVisible: Dispatch<SetStateAction<boolean>>
}

const GlobalContext = createContext<GlobalContextInterface>({
    scrollPosition: "top",
    isScreenSmall: false,
    isMobileNavVisible: false,
    setIsMobileNavVisible: () => {}
})

export const GlobalContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [ scrollPosition, setScrollPosition ] = useState<ScrollPosition>( "top" )
  const [ isScreenSmall, setIsScreenSmall ] = useState<boolean>( false )
  const [ isMobileNavVisible, setIsMobileNavVisible ] = useState<boolean>( false )

  const handleScreenResize = useCallback(throttle(() => {
    const checkIsScreenSmall = window.innerWidth < 640

    setIsScreenSmall( checkIsScreenSmall )

    if ( !checkIsScreenSmall ) {
      setIsMobileNavVisible( false )
    }
  }, 100), [])

  const handleScroll = useCallback(throttle(() => {
    const scrolled = window.scrollY
    const threshold = 50
    const bottomThreshold = document.documentElement.scrollHeight - window.innerHeight - threshold

    let newPosition: "top" | "middle" | "bottom" = "middle"

    if ( scrolled < threshold ) {
      newPosition = "top"
    } else if ( scrolled > bottomThreshold ) {
      newPosition = "bottom"
    } 

    setScrollPosition( newPosition )

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
            scrollPosition,
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
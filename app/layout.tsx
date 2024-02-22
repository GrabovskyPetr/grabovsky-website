"use client"

import "./ui/globals.css"
import { inter } from "./ui/fonts"
import { useState } from "react"
import Header from "./ui/header/header"

interface RootLayoutProps {
  children: React.ReactNode
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  const [ isMobileNavOpen, setMobileNavOpen ] = useState<boolean>( false )

  const handleToggleMobileNav = () => {
    setMobileNavOpen( prevState => !prevState )
  }

  return (
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
        <Header 
          handleToggleMobileNav={ handleToggleMobileNav }
          isMobileNavOpen={ isMobileNavOpen }
        />
        <main className="max-w-5xl px-3 pb-1 pt-24">
          { children }
        </main>
      </body>
    </html>
  )
}

export default RootLayout
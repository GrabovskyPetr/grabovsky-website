import "./ui/globals.css"
import { inter } from "./ui/fonts"
import Header from "./ui/header/header"

interface RootLayoutProps {
  children: React.ReactNode
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="cs">
      <body 
        className={`${ inter.className }
                    w-full min-h-screen 
                    overflow-x-hidden antialiased
                    bg-primary bg-primary-size
                    bg-primary-position bg-fixed
                    bg-no-repeat bg-secondary
                    sm:bg-cover sm:bg-center`
                  }
      >
        <Header />
        { children }
      </body>
    </html>
  )
}

export default RootLayout
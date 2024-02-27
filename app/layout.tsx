import "./ui/globals.css"
import { GlobalContextProvider } from "./lib/globalContext"
import { inter } from "./ui/fonts"
import Header from "./ui/header/header"

interface RootLayoutProps {
  children: React.ReactNode
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="cs">
      <body 
        className={`
          ${ inter.className }
          w-full min-h-screen
          flex flex-col
          items-center text-primary
          overflow-x-hidden antialiased
          bg-primary bg-primary-size
          bg-primary-position bg-fixed
          bg-no-repeat bg-secondary
          sm:bg-cover sm:bg-center
        `}
      >
        <GlobalContextProvider>
          <Header />
          <main className="max-w-5xl px-3 pb-1 pt-24">          
            { children }          
          </main>
        </GlobalContextProvider>
      </body>
    </html>
  )
}

export default RootLayout
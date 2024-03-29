import "./ui/globals.css"
import { GlobalContextProvider } from "./lib/globalContext"
import { inter } from "./ui/fonts"
import clsx from "clsx"
import Header from "./ui/header/header"
import Footer from "./ui/footer"

interface RootLayoutProps {
  children: React.ReactNode
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="cs">
      <body 
        className={clsx(
          inter.className,
          "w-full min-h-screen flex flex-col",
          "items-center text-primary overflow-x-hidden",
          "antialiased bg-primary bg-primary-size",
          "bg-primary-position bg-fixed bg-no-repeat",
          "bg-secondary sm:bg-cover sm:bg-center"
      )}>
        <GlobalContextProvider>
          <Header />          
          <main 
            className="max-w-5xl px-3 pb-16 pt-24 flex-grow"
          >          
            { children }          
          </main>
          <Footer />
        </GlobalContextProvider>
      </body>
    </html>
  )
}

export default RootLayout
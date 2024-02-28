import { useGlobalContext } from "@/app/lib/globalContext"
import { usePathname } from "next/navigation"
import { useTrail, animated } from "react-spring"
import MobileLink from "./mobileLink"
import navItems from "@/app/lib/navItems"
import clsx from "clsx"

const MobileNav: React.FC = () => {
    const { setIsMobileNavVisible, isMobileNavVisible, isScreenSmall } = useGlobalContext()
    const pathName = usePathname()

    const trail = useTrail(navItems.length, {
        opacity: isMobileNavVisible ? 1 : 0,
        x: isMobileNavVisible ? 0 : 200,
        height: isMobileNavVisible ? 200 : 0,
        from: { opacity: 0, x: 20, height: 0 },
        config: { mass: 2, tension: 400, friction: 40 }
      });

    if ( !isScreenSmall ) {
        return null
    }

    return (
        <>
            {isMobileNavVisible && (
                <div
                    className="fixed inset-0"
                    onClick={() => setIsMobileNavVisible( false )}
                >                    
                </div>
            )}
            <nav className="w-full h-full flex items-center justify-center overflow-hidden">
                <ul className="w-full space-y-5">
                {trail.map(({ height, ...style }, index) => (
                    <animated.li
                    key={navItems[index].name}
                    className="flex items-center justify-center"
                    style={{
                        ...style,
                        transform: style.x.to(x => `translate3d(0,${x}px,0)`),
                    }}
            >
              <MobileLink
                name={ navItems[ index ].name }
                href={ navItems[ index ].href }
                Icon={ navItems[index].Icon }
                isActive={ pathName === navItems[ index ].href }
              />
            </animated.li>
          ))}
                </ul>
            </nav>
        </>     
    )
}

export default MobileNav
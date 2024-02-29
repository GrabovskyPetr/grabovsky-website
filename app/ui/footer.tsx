"use client"

import { useGlobalContext } from "@/app/lib/globalContext"
import { clsx } from "clsx"
import { useSpring, animated } from "react-spring"

const Footer: React.FC = () => {
    const { isMobileNavVisible, isScrolledTop } = useGlobalContext();

    const footerAnimation = useSpring({
        to: (() => {
            // Nejprve zkontrolujte kombinovaný stav
            if (isMobileNavVisible && isScrolledTop) {
                return { transform: "translateX(100%)", opacity: 0 }; // Skryje patičku při zobrazení mobilní navigace
            } else if (!isScrolledTop) {
                return { transform: "translateY(100%)", opacity: 0 }; // Skryje patičku, pokud uživatel není nascrollován nahoru
            } else {
                return { transform: "translateY(0%)", opacity: 1 }; // Zobrazí patičku, pokud je na vrcholu stránky a mobilní navigace není zobrazena
            }
        })(),
        from: { transform: 'translateY(100%)', opacity: 0 },
        config: {
            duration: 300,
        }
    });

    return (
        <animated.footer
            style={footerAnimation}
            className={clsx(
                "w-full bg-primary-alpha fixed bottom-0 h-14"
            )}
        >
            <div className="text-white">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.Exercitationem. Provident, dignissimos.
            </div>
        </animated.footer>
    );
};

export default Footer;

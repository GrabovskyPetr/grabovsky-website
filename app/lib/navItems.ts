import { IconType } from "react-icons"
import { FaHome } from "react-icons/fa"
import { IoIosPerson } from "react-icons/io"
import { FaDiagramProject } from "react-icons/fa6"
import { FaPhone } from "react-icons/fa6"

interface NavItem {
    name: string
    href: string
    icon: IconType
}

const navItems: NavItem[] = [
    { name: "Domů", href: "/", icon: FaHome },
    { name: "O mně", href: "/aboutMe", icon: IoIosPerson },
    { name: "Projekty", href: "/projects", icon: FaDiagramProject },
    { name: "Kontakt", href: "/contact", icon: FaPhone }
]

export default navItems
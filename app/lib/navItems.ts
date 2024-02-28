import { IconType } from "react-icons"
import { FaHome } from "react-icons/fa"
import { IoIosPerson } from "react-icons/io"
import { FaDiagramProject } from "react-icons/fa6"
import { FaPhone } from "react-icons/fa6"

interface NavItem {
    name: string
    href: string
    Icon: IconType
}

const navItems: NavItem[] = [
    { name: "Domů", href: "/", Icon: FaHome },
    { name: "O mně", href: "/aboutMe", Icon: IoIosPerson },
    { name: "Projekty", href: "/projects", Icon: FaDiagramProject },
    { name: "Kontakt", href: "/contact", Icon: FaPhone }
]

export default navItems
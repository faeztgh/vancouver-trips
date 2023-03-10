import Image from "next/image";
import Link from "next/link";
import Logo from "../../../public/logo.svg";
import ActiveLink from "../Common/ActiveLink";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
    return (
        <nav className="flex z-50 bg-opacity-90 bg-white sticky top-0 px-6 justify-between align-middle items-center space-x-3 shadow">
            <div className="flex gap-2  items-center">
                <Image width={50} height={50} src={Logo} alt="Logo" />
                <Link
                    href="/"
                    className="font-rozhaOne drop-shadow-lg font-semibold text-slate-800 text-2xl"
                >
                    Vancouver Trips
                </Link>
            </div>
            <ul className="flex gap-6 justify-center items-center ">
                {navData.map(({ text, href, icon }) => {
                    return (
                        <li
                            key={text}
                            className="text-xl  hover:drop-shadow-md hover:text-gray-600 text-black font-semibold"
                        >
                            <ActiveLink href={href} activeclassname="underline">
                                <span className="flex items-center gap-1">
                                    {icon}
                                    {text}
                                </span>
                            </ActiveLink>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};

export default Navbar;

const navData = [
    {
        text: "Home",
        href: "/",
        icon: "",
    },
    {
        text: "About",
        href: "/about",
        icon: "",
    },
    {
        text: "Book Online",
        href: "/book",
        icon: "",
    },
    {
        text: "Login",
        href: "/auth/login",
        icon: <FaUserCircle size="20px"/>,
    },
];

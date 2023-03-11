import Image from "next/image";
import Link from "next/link";
import ActiveLink from "../Common/ActiveLink";
import { FaUserCircle } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import { useWindowWidth } from "@react-hook/window-size";
import { useState } from "react";
import MobileMenu from "./MobileMenu";
import Logo from "./Logo";

const Navbar = () => {
    const deviceWidth = useWindowWidth();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
    return (
        <>
            <nav
                className="flex z-50 bg-opacity-90 py-4  bg-white
             sticky top-0 px-6 justify-between align-middle items-center space-x-3 shadow"
            >
                <Logo />
                {deviceWidth < 767 ? (
                    <>
                        {isMobileMenuOpen ? (
                            <GrClose
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="cursor-pointer text-2xl"
                            />
                        ) : (
                            <GiHamburgerMenu
                                onClick={() => setIsMobileMenuOpen(true)}
                                className="cursor-pointer text-2xl"
                            />
                        )}
                    </>
                ) : (
                    <ul className="flex gap-12 justify-center items-center ">
                        {navData.map(({ text, href, icon }) => {
                            return (
                                <li
                                    key={text}
                                    className="text-3xl hover:drop-shadow-md hover:text-gray-600 text-black font-semibold"
                                >
                                    <ActiveLink
                                        href={href}
                                        activeclassname="underline"
                                    >
                                        <span className="flex items-center gap-1">
                                            {icon}
                                            {text}
                                        </span>
                                    </ActiveLink>
                                </li>
                            );
                        })}
                    </ul>
                )}
            </nav>
            {isMobileMenuOpen && (
                <MobileMenu
                    setIsMobileMenuOpen={setIsMobileMenuOpen}
                    isMobileMenuOpen
                />
            )}
        </>
    );
};

export default Navbar;

export const navData = [
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
        icon: <FaUserCircle size="20px" />,
    },
];

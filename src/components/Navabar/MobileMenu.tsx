import React from "react";
import { GrClose } from "react-icons/gr";
import ActiveLink from "../Common/ActiveLink";
import { navData } from "./Navbar";
import { motion } from "framer-motion";
import Logo from "./Logo";

const variants = {
    hidden: { opacity: 0, x: 500, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 500, y: 0 },
};
type Props = {
    setIsMobileMenuOpen: (input: boolean) => void;
    isMobileMenuOpen: boolean;
};
const MobileMenu = (props: Props) => {
    const { setIsMobileMenuOpen, isMobileMenuOpen } = props;
    return (
        <motion.aside
            variants={variants}
            initial="hidden"
            animate="enter"
            exit="exit"
            transition={{ type: "tween" }}
            className="w-full bg-white h-full z-50 inset-0 transform overflow-auto ease-in-out transition-all fixed duration-300"
        >
            <GrClose
                onClick={() => setIsMobileMenuOpen(false)}
                className="cursor-pointer text-4xl absolute top-6 right-6"
            />
            <Logo
                className="ml-6 mt-3"
                onClick={() => setIsMobileMenuOpen(false)}
            />
            <ul className="flex flex-col pt-56 text-6xl gap-28 justify-center items-center ">
                {navData.map(({ text, href, icon }) => {
                    return (
                        <li
                            onClick={() => setIsMobileMenuOpen(false)}
                            key={text}
                            className="hover:drop-shadow-md hover:text-gray-600 text-black font-semibold"
                        >
                            <ActiveLink href={href} activeclassname="underline">
                                <span className="flex items-center gap-1">
                                    {text}
                                </span>
                            </ActiveLink>
                        </li>
                    );
                })}
            </ul>
        </motion.aside>
    );
};

export default MobileMenu;

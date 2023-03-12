import Link from "next/link";
import React from "react";
import { FaTiktok } from "react-icons/fa";
import {
    IoLogoFacebook,
    IoLogoInstagram,
    IoLogoTwitter,
    IoLogoYoutube,
} from "react-icons/io";
import { IconType } from "react-icons/lib";

const Footer = () => {
    return (
        <footer className="relative bg-transparent pt-8 pb-6 mt-10">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap text-left lg:text-left">
                    <div className="w-full lg:w-6/12 px-4">
                        <h4 className="text-3xl fonat-semibold text-blueGray-700">
                            Let's keep in touch!
                        </h4>
                        <h5 className="text-lg mt-0 mb-2 text-blueGray-600">
                            Find us on any of these platforms, we respond 1-2
                            business days.
                        </h5>
                        <div className="mt-6 flex gap-2 lg:mb-0 mb-6">
                            {socialIcons.map(({ title, Icon, href }) => {
                                return (
                                    <a
                                        className="bg-white hover:shadow-md hover:drop-shadow-md flex text-2xl text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                                        type="button"
                                        href={href}
                                        referrerPolicy="no-referrer"
                                    >
                                        <Icon />
                                    </a>
                                );
                            })}
                        </div>
                    </div>
                    <div className="w-full lg:w-6/12 px-4">
                        <div className="flex flex-wrap items-top mb-6">
                            <div className="w-full lg:w-4/12 px-4 ml-auto">
                                <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                                    Useful Links
                                </span>
                                <hr className="mb-3 " />
                                <ul className="list-unstyled">
                                    <li>
                                        <a
                                            className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                            href="/about"
                                        >
                                            About Us
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                            href="/blog"
                                        >
                                            Blog
                                        </a>
                                    </li>

                                    <li>
                                        <a
                                            className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                            href=""
                                        >
                                            Free Tours
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="w-full lg:w-4/12 px-4">
                                <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                                    Other Resources
                                </span>
                                <hr className="mb-3 " />{" "}
                                <ul className="list-unstyled">
                                    <li>
                                        <a
                                            className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                            href="#"
                                        >
                                            Terms &amp; Conditions
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                            href="#"
                                        >
                                            Privacy Policy
                                        </a>
                                    </li>
                                    <li>
                                        <Link
                                            className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                            href="/#contact-sec"
                                        >
                                            Contact Us
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="w-full lg:w-4/12 px-4">
                                <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                                    Contact Info
                                </span>
                                <hr className="mb-3 " />{" "}
                                <ul className="list-unstyled">
                                    <li>
                                        <a
                                            className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                            href="mailto:info@Vancouvertrips.com"
                                        >
                                            info@Vancouvertrips.com
                                        </a>
                                    </li>
                                    <li>
                                        <Link
                                            className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                            href="tel:778-955-9787"
                                        >
                                            778-955-9787
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-blueGray-300" />
                <div className="flex flex-wrap items-center md:justify-between justify-center">
                    <div className="w-full md:w-4/12 px-4 mx-auto text-center">
                        <div className="text-sm text-blueGray-500 font-semibold py-1">
                            Copyright &copy;{" "}
                            <span id="get-current-year">
                                {new Date().getFullYear()}
                            </span>
                            <a
                                href=""
                                className="text-blueGray-500 hover:text-gray-800"
                                target="_blank"
                                referrerPolicy="no-referrer"
                            >
                                {" "}
                                Vancouver Trips{" "}
                            </a>
                            by{" "}
                            <a
                                href="https://github.com/faeztgh"
                                className="text-blueGray-500 hover:text-blueGray-800 underline hover:drop-shadow-md"
                                target="_blank"
                                referrerPolicy="no-referrer"
                            >
                                Faez Tgh
                            </a>
                            .
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

type SocialIconType = {
    title: string;
    Icon: IconType;
    href: string;
};
const socialIcons: Array<SocialIconType> = [
    {
        title: "Twitter",
        Icon: IoLogoTwitter,
        href: "",
    },
    {
        title: "Facebook",
        Icon: IoLogoFacebook,
        href: "",
    },
    {
        title: "YouTube",
        Icon: IoLogoYoutube,
        href: "",
    },
    {
        title: "Instagram",
        Icon: IoLogoInstagram,
        href: "",
    },
    {
        title: "TikTok",
        Icon: FaTiktok,
        href: "",
    },
];

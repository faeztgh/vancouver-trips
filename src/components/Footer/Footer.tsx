import React from "react";

const Footer = () => {
    return (
        <footer className="bg-red-100 py-12 flex justify-center items-center">
            <h1> &copy; {new Date().getFullYear()} by Vanvouver Trips. All rights reserved</h1>
        </footer>
    );
};

export default Footer;

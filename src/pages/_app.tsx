import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navabar/Navbar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Navbar />
            <Component {...pageProps} />
            <Footer/>
        </>
    );
}


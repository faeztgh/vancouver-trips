import Footer from "@/components/Footer/Footer";
import dynamic from "next/dynamic";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import 'react-multi-carousel/lib/styles.css';

const Navbar = dynamic(() => import("@/components/Navabar/Navbar"), {
    ssr: false,
});
export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Navbar />
            <Component {...pageProps} />
            <Footer />
        </>
    );
}


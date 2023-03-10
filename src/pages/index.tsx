import Head from "next/head";
import { Inter } from "next/font/google";
import Home from "@/components/Home/HeroSection";
import AboutSection from "@/components/Home/AboutSection";
import SpecialSection from "@/components/Home/SpecialSection";
import VideoSection from "@/components/Home/VideoSection";

const inter = Inter({ subsets: ["latin"] });

export default function MyHome() {
    return (
        <>
            <Head>
                <title>Vancouver Trips</title>
                <meta name="description" content="Vancouver Trips" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={inter.className}>
                <Home />
                <AboutSection />
                <SpecialSection />
                <VideoSection />
            </main>
        </>
    );
}


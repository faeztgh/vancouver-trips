import Head from "next/head";
import Home from "@/components/Home/HeroSection";
import AboutSection from "@/components/Home/AboutSection";
import SpecialSection from "@/components/Home/SpecialSection";
import VideoSection from "@/components/Home/VideoSection";
import QuoteSec from "@/components/Home/QuoteSec";
import ContactSection from "@/components/Home/ContactSection";
import Testimonial from "@/components/Home/Testimonial";
import Layout from "@/components/layout/Layout";


export default function MyHome() {
    const title = "Vancouver Trips";
    return (
        <>
            <Head>
                <meta name="description" content="Vancouver Trips" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
            </Head>
            <Layout title={title}>
                <main className={`pb-28`}>
                    <Home />
                    <AboutSection />
                    <SpecialSection />
                    <VideoSection />
                    <Testimonial />
                    <QuoteSec />
                    <ContactSection />
                </main>
            </Layout>
        </>
    );
}


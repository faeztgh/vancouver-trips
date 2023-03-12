import Image from "next/image";
import Link from "next/link";
import React from "react";
import HeroImg from "../../assets/hero-sec.webp";
const Home = () => {
    return (
        <section className="w-full h-full relative">
            <Image
                src={HeroImg}
                alt="Hero Image"
                className="blur-sm"
                priority
            />
            <div className="absolute flex gap-12 drop-shadow-lg text-white flex-col justify-center items-center inset-0">
                <h1 className="font-rozhaOne text-4xl md:text-8xl font-semibold">
                    Vancouver Trips
                </h1>
                <h5 className="font-montserat font-medium text-lg flex-wrap md:text-2xl">
                    Discover Vancouver and BC through our Unforgettable Journeys
                </h5>
                <Link
                    href="/book"
                    className="hover:shadow-lg hover:drop-shadow-md border-white p-5 border-2 "
                >
                    Book Your Experience
                </Link>
            </div>
        </section>
    );
};

export default Home;

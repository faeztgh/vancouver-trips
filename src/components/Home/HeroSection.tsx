import Image from "next/image";
import React from "react";
import HeroImg from "../../../public/hero-sec.webp";
const Home = () => {
    return (
        <section className="w-full h-full relative">
            <Image
                layout="responsive"
                objectFit="contain"
                src={HeroImg}
                alt="Hero Image"
                className="blur-sm"
                priority
            />
            <div className="absolute flex gap-12 drop-shadow-lg text-white flex-col justify-center items-center inset-0">
                <h1 className="font-rozhaOne text-8xl font-semibold">
                    Vancouver Trips
                </h1>
                <h5 className="font-montserat font-medium text-2xl">
                    Discover Vancouver and BC through our Unforgettable Journeys
                </h5>
                <button className="hover:shadow-lg hover:drop-shadow-md border-white p-5 border-2 ">
                    Book Your Experience
                </button>
            </div>
        </section>
    );
};

export default Home;

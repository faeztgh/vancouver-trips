import Link from "next/link";
import Paragraph from "../Common/Paragraph";

const AboutSection = () => {
    return (
        <section className="flex bg-red-100 justify-center items-center py-24 flex-col gap-12">
            <h1 className="text-5xl font-bold font-rozhaOne">About Us</h1>
            <Paragraph classname="w-4/6 ">
                About Us Discover the best of British Columbia with Vancouver
                Trips! Join us on a scenic adventure filled with unforgettable
                memories, delicious catered meals, and endless photo ops. From
                the rugged wilderness of the Lower Mainland to the sparkling
                city lights, we've got you covered with our diverse range of
                tours. Get your adrenaline pumping with our off-road excursions,
                or opt for a luxurious in-city experience. Whether you're a solo
                adventurer or a group of ten, our knowledgeable guides and
                top-notch vehicles will ensure an unforgettable experience. So
                come along and create lifelong memories with Vancouver Trips -
                your gateway to the beauty of BC.
            </Paragraph>
            <div className="flex gap-5">
                <Link
                    href="/about"
                    className="p-5 border hover:shadow-sm hover:drop-shadow-sm border-black"
                >
                    Read More
                </Link>
                <Link
                    href="#contact-sec"
                    className="p-5 border hover:shadow-sm hover:drop-shadow-sm border-black"
                >
                    Contact Us
                </Link>
            </div>
        </section>
    );
};

export default AboutSection;

import Image from "next/image";
import Sp_1 from "../../assets/special-1.svg";
import Sp_2 from "../../assets/special-2.svg";
import Sp_3 from "../../assets/special-3.svg";
import Paragraph from "../Common/Paragraph";
const SpecialSection = () => {
    return (
        <section className="flex py-28 gap-10 flex-col justify-center items-center px-10 ">
            <h1 className="text-6xl my-10 font-rozhaOne">What Makes Us Special</h1>
            <div className="flex ">
                {cardData.map(({ logo, title, desc }) => {
                    return (
                        <div
                            className="flex flex-col gap-12 justify-center items-center"
                            key={title}
                        >
                            <Image className="w-24" src={logo} alt={title} />
                            <h1 className="font-rozhaOne font-medium text-2xl">
                                {title}
                            </h1>
                            <Paragraph classname="px-10 font-normal">
                                {desc}
                            </Paragraph>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default SpecialSection;

const cardData = [
    {
        logo: Sp_1,
        title: "Local Expert Guides",
        desc: `Our knowledgeable designated Tour Guides are dedicated to making your BC experience unforgettable. With their knowledge, passion, and friendly personalities, they'll lead you on a journey filled with memories and adventures. Let them show you the best of British Columbia!`,
    },
    {
        logo: Sp_2,
        title: "Handpicked Adventures",
        desc: `Discover the best of BC with our handpicked adventures at Vancouver Trips. From scenic tours to heart-pumping excursions, we offer a unique and unforgettable experience for all. Join us on a journey beyond the ordinary.`,
    },
    {
        logo: Sp_3,
        title: "Hidden Gem Destinations",
        desc: `Explore BC's hidden gems with Vancouver Trips. Our local expertise takes you to breathtaking off-the-beaten-path destinations for a truly authentic experience. Join us on a journey to discover the untold stories and secrets of the region.`,
    },
];

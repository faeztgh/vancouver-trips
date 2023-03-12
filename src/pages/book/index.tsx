import BookCards from "@/components/Book/BookCard";
import Layout from "@/components/layout/Layout";
import { StaticImageData } from "next/image";
import Carousel from "react-multi-carousel";

import BookCardImg1 from "../../assets/book-card-1.webp";
import BookCardImg2 from "../../assets/book-card-2.jpg";
import BookCardImg3 from "../../assets/book-card-3.webp";
import BookCardImg4 from "../../assets/book-card-4.jpg";

import BookDetail1 from "../../assets/book-detail-1.webp";
import BookDetail2 from "../../assets/book-detail-2.webp";
import BookDetail3 from "../../assets/book-detail-3.webp";

const Book = () => {
    const title = "Book Online";
    return (
        <>
            <Layout title={title}>
                <section className="min-h-full w-full">
                    <h1 className="py-24 gap-16 px-16 bg-red-100 text-2xl md:text-6xl text-center">
                        Choose Your Destination
                    </h1>
                    <Carousel
                        ssr
                        infinite
                        className="py-36"
                        responsive={responsive}
                        removeArrowOnDeviceType={["tablet", "mobile"]}
                    >
                        {bookData.map(
                            ({ img, title, date, duration, price }) => {
                                return (
                                    <BookCards
                                        key={title}
                                        title={title}
                                        img={img}
                                        date={date}
                                        duration={duration}
                                        price={price}
                                        slug={title
                                            .split(" ")
                                            .join("-")
                                            .toLocaleLowerCase()}
                                    />
                                );
                            }
                        )}
                    </Carousel>
                </section>
            </Layout>
        </>
    );
};

export default Book;

export type BookDataType = {
    img: StaticImageData;
    detailImg: StaticImageData;
    title: string;
    date: string;
    duration: string;
    price: string;
    desc: string;
};

export const bookData: Array<BookDataType> = [
    {
        img: BookCardImg1,
        detailImg: BookDetail1,
        title: "Sea to Sky Tour",
        date: "Mon, Fri",
        duration: "7",
        price: "290",
        desc: `Starting from any point in Vancouver, we will take you and your friends on the mesmerizing Sea To Sky and will stop by all the legendary sceneries, waterfalls and lakes. We will stop at the following places:
        <br/>
        <br/>
        1. Shannon Falls:
        <br/>
        BC's 3rd highest waterfall, plunging 335 m. over cliffs, with hiking trails to viewing areas. We will guide to the main view point to view this glamorous waterfall and you can spend as much as an hour at this location.
        <br/>
        <br/>
        2. Mamquam Falls:
        <br/>
        Mamquam Falls is a scenic waterfall in Squamish, BC, that follows a trail along the river before looping back through the forest. The waterfall and canyon area are beautiful and the short walk can be done most times of the year.
        <br/>
        <br/>
        3. Alice Lake:
        <br/>
        Alice Lake Provincial Park is a local landmark known for its surrounding mountain views, dense forests, grassy areas and four freshwater lakes (Edith, Stump, Fawn and Alice) that are widely used for swimming, picnicking, fishing, canoeing and stand-up paddleboarding
        <br/>
        <br/>
        4. Brohm Lake:
        <br/>
        Brohm Lake is a popular swimming lake for visitors and locals alike. Swim, swing, jump and lounge at one of the Sea to Sky's most popular summer spots. The water at Brohm Lake is perfectly refreshing, not too deep and easily accessible from the Sea to Sky Highway, making it both an easy stop on the way to or from your next adventure or a perfect all-day hangout.
        <br/>
        <br/>
        5. Lower Joffre Lake:
        <br/>
        Joffre Lakes is one of BC's most beautiful hikes and is relatively easy to access compared to other alpine lakes in the region. The striking, saturated blue colour of this lake is caused by “rockflour” – or glacial silt – that is suspended in the water and reflects green and blue wavelengths of sunlight. Joffre Lakes Provincial Park has opportunities for hiking, camping, mountaineering, wildlife viewing, and fishing.
        <br/>

        `,
    },
    {
        img: BookCardImg3,
        detailImg: BookDetail3,
        title: "Jungle Tour",
        date: "Mon, Fri",
        duration: "5",
        price: "80",
        desc: "",
    },
    {
        img: BookCardImg2,
        detailImg: BookDetail2,
        title: "Waterfall Tour",
        date: "Mon, Fri",
        duration: "3",
        price: "65",
        desc: "",
    },
    {
        img: BookCardImg3,
        detailImg: BookDetail3,
        title: "River Hike",
        date: "Mon, Fri",
        duration: "5",
        price: "80",
        desc: "",
    },
    {
        img: BookCardImg4,
        detailImg: BookDetail1,
        title: "Sea Hike",
        date: "Mon, Fri",
        duration: "3",
        price: "65",
        desc: "",
    },
];

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 6,
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    },
};

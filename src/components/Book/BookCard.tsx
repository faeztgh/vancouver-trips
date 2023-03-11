import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
    img: StaticImageData;
    title: string;
    date: string;
    duration: string;
    price: string;
    slug: string;
};
const BookCard = (props: Props) => {
    const { date, duration, img, price, title, slug } = props;
    console.log(slug);
    return (
        <>
            <div className="flex justify-center mx-4 my-2 ">
                <div className="block max-w-sm rounded-lg bg-white shadow-lg dark:bg-neutral-700">
                    <a
                        href="#!"
                        data-te-ripple-init
                        data-te-ripple-color="light"
                    >
                        <Image
                            className="rounded-t-lg max-h-64"
                            src={img}
                            alt={title}
                        />
                    </a>
                    <div className="p-6 flex flex-col gap-5">
                        <Link
                            href={`/book/${slug}`}
                            className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50"
                        >
                            {title}
                        </Link>
                        <hr />
                        <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                            {date}
                        </p>
                        <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                            {duration} hr
                        </p>
                        <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                            $ {price}
                        </p>
                        <button
                            type="button"
                            className=" bg-black hover:shadow-md hover:drop-shadow-md shadow px-4 py-6 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-primary-600 focus:bg-primary-600 focus:outline-none focus:ring-0 active:bg-primary-700 "
                        >
                            Book Now
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BookCard;

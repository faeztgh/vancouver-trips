import Paragraph from "@/components/Common/Paragraph";
import Image from "next/image";
import { useRouter } from "next/router";
import { bookData, BookDataType } from ".";
import BookCardImg1 from "../../assets/book-card-1.webp";
import BookDetail1 from "../../assets/book-detail-1.webp";
import { useState } from "react";
import { Modal } from "antd";

const BookDetail = () => {
    const { asPath } = useRouter();
    const slug = asPath.split("/")[asPath.split("/").length - 1];
    const pageTitle = slug.split("-").join(" ");
    const currData: BookDataType = bookData.find(
        (item) => item.title.toLowerCase() === pageTitle
    ) ?? {
        img: BookCardImg1,
        detailImg: BookDetail1,
        title: "",
        date: "",
        duration: "",
        price: "",
        desc: "",
    };

    const { img, date, duration, price, title, desc, detailImg } = currData;

    // Modal Impl
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return (
        <>
            <div className="w-full pb-16 flex-col relative flex items-center justify-center ">
                <div className="relative w-full flex justify-center flex-col justify-items-center">
                    <Image src={detailImg} alt={title} className="w-full" />
                    <h1 className="absolute text-center w-full text-white font-rozhaOne text-6xl drop-shadow-md">
                        {pageTitle}
                    </h1>
                </div>

                <section className="py-16 flex-col gap-20 flex justify-center items-center">
                    <h1>
                        Discover the Beauty of BC: Join us on a breathtaking
                        journey from {title}
                    </h1>
                    <div className="flex text-3xl">
                        <span className="border p-8 flex items-center justify-center">
                            {duration} hr
                        </span>
                        <span className="border p-8 flex items-center justify-center">
                            $ {price}
                        </span>
                    </div>

                    <button
                        onClick={showModal}
                        className="bg-black text-4xl shadow-md drop-shadow-md text-white px-10 py-3 hover:bg-white hover:text-black border-black border transform duration-300 transition-colors "
                    >
                        Book Now
                    </button>
                </section>
                <hr className="my-16 bg-gray-700 rounded-lg drop-shadow-md shadow w-full max-w-5xl h-1" />
                {desc && (
                    <section className="flex mt-8 justify-center flex-col gap-16 items-center w-full max-w-6xl ">
                        <h1 className="text-4xl font-semibold">
                            Service Description
                        </h1>
                        <p
                            className="text-center text-xl leading-relaxed"
                            dangerouslySetInnerHTML={{ __html: desc }}
                        />
                    </section>
                )}
                <Modal
                    title=""
                    open={isModalOpen}
                    onCancel={handleCancel}
                    centered
                    maskClosable
                    footer={[
                        <button
                            key="cancell"
                            onClick={handleCancel}
                            className="bg-black self-center text-2xl shadow-md drop-shadow-md text-white px-10 py-3 hover:bg-white hover:text-black border-black border transform duration-300 transition-colors "
                        >
                            Got It
                        </button>,
                    ]}
                >
                    <Paragraph classname="text-6xl text-center p-8">
                        Sorry, this service is not yet available for online
                        bookings. Please contact us for more information.
                    </Paragraph>
                </Modal>
            </div>
        </>
    );
};

export default BookDetail;

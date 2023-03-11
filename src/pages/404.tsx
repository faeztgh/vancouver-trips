import Layout from "@/components/layout/Layout";
import Image from "next/image";
import Link from "next/link";
import NotFoundImg from "../assets/404-page.png";
import DisconnectImg from "../assets/disconnect-img.png";

const PageNotFound404 = () => {
    return (
        <Layout>
            <div className="lg:px-24 lg:py-24 md:py-20 md:px-44 px-4 py-24 items-center flex justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16">
                <div className="xl:pt-24 w-full xl:w-1/2 relative pb-12 lg:pb-0">
                    <div className="relative">
                        <div className="absolute">
                            <div className="flex flex-col gap-12">
                                <h1 className="my-2 text-gray-800 font-bold text-3xl">
                                    Looks like you've found the doorway to the
                                    great nothing
                                </h1>
                                <p className="my-2 text-xl text-gray-800">
                                    Sorry about that! Please visit our hompage
                                    to get where you need to go.
                                </p>
                                <Link
                                    href="/"
                                    className="sm:w-full max-w-sm lg:w-auto my-2 border rounded md py-4 mt-16 px-8 text-center uppercase bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-opacity-50"
                                >
                                    Take me there!
                                </Link>
                            </div>
                        </div>
                        <div>
                            <Image alt="404 image" src={NotFoundImg} />
                        </div>
                    </div>
                </div>
                <div>
                    <Image alt="disconnect image" src={DisconnectImg} />
                </div>
            </div>
        </Layout>
    );
};

export default PageNotFound404;

/* eslint-disable react/no-unescaped-entities */
import Layout from "@/components/layout/Layout";
import Head from "next/head";
import Image from "next/image";
import AboutImg from "../../../public/about-img.webp";
import Paragraph from "../../components/Common/Paragraph";

const About = () => {
    const title = "About";
    return (
        <>
            <Layout title={title}>
                <div className="w-full h-48 bg-red-100 flex justify-center items-center">
                    <h1 className="font-medium font-rozhaOne text-4xl capitalize">
                        This is our story
                    </h1>
                </div>
                <Image
                    className="w-full"
                    priority
                    src={AboutImg}
                    alt="about us"
                />
                <div className="w-full justify-center items-center flex py-32">
                    <Paragraph classname="w-4/6 ">
                        I'm a paragraph. Click here to add your own text and
                        edit me. It’s easy. Just click “Edit Text” or double
                        click me to add your own content and make changes to the
                        font. Feel free to drag and drop me anywhere you like on
                        your page. I’m a great place for you to tell a story and
                        let your users know a little more about you.
                        <br />
                        <br />
                        This is a great space to write long text about your
                        company and your services. You can use this space to go
                        into a little more detail about your company. Talk about
                        your team and what services you provide. Tell your
                        visitors the story of how you came up with the idea for
                        your business and what makes you different from your
                        competitors. Make your company stand out and show your
                        visitors who you are.
                    </Paragraph>
                </div>
            </Layout>
        </>
    );
};

export default About;

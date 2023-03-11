import ContactSecForm from "../Forms/ContactSecForm";
import {  List, Typography } from "antd";
function ContactSection() {
    return (
        <section className="px-20 py-16 flex flex-col gap-10 items-center text-black font-mo font-medium text-lg">
                <h1 className="capitalize text-6xl font-semibold font-rozhaOne">Plan Your Adventures With Us</h1>
            <div className="flex flex-col items-start text-xl">
                <p>
                    We would be delighted to assist you in planning your stay in
                    Vancouver and exploring the breathtaking beauty of British
                    Columbia. To ensure that we tailor a personalized itinerary
                    to your preferences, we kindly request that you send us an
                    email with the following details:
                </p>
                <List
                className=""
                    size="small"
                    dataSource={listData}
                    split={false}
                    renderItem={(item) => (
                        <List.Item >
                            <Typography.Text>•</Typography.Text>{" "}
                            {item}
                        </List.Item>
                    )}
                />
                <p>
                    Our team will then use this information to craft an
                    itinerary that will allow you to make the most of your time
                    in this beautiful region. We look forward to hearing from
                    you soon and making your stay in Vancouver a truly memorable
                    one.
                </p>
            </div>
            <h5 className="font-semibold text-lg mt-8">info@Vancouvertrips.com | 778-955-9787</h5>
            <div className="w-full mt-12 flex justify-center items-center">
                <ContactSecForm />
            </div>
        </section>
    );
}

export default ContactSection;

const listData = [
    "The dates of your stay in Vancouver.",
    "The activities you are interested in experiencing.",
    "The places you would like to visit.",
];

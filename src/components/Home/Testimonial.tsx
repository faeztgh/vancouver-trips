import React from "react";
import Paragraph from "../Common/Paragraph";

function Testimonial() {
    return (
        <section className="py-36 gap-16 px-16 bg-red-100 flex flex-col justify-center items-center">
            <h1 className="capitalize text-4xl font-rozhaOne font-semibold">
                testimonial
            </h1>
            <div className="flex">
                {testimonialData.map(({ desc, name }) => {
                    return (
                        <div key={name} className="flex items-center flex-col">
                            <Paragraph classname="mb-10">{desc}</Paragraph>
                            <h6>{name}</h6>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}

export default Testimonial;

const testimonialData = [
    {
        desc: `“I'm a testimonial. Click to edit me and add text that
        says something nice about you and your services.”`,
        name: `Scott Lowe`,
    },
    {
        desc: ` “I'm a testimonial. Click to edit me and add text that
        says something nice about you and your services.”`,
        name: `The Robertsons`,
    },
    {
        desc: `“I'm a testimonial. Click to edit me and add text that
        says something nice about you and your services.”`,
        name: `Jody and Tom Larson`,
    },
];

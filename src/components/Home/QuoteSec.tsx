import Image from "next/image";
import QuoteImg from "../../assets/quote-sec.webp";

function QuoteSec() {
    return (
        <section className="w-full h-full relative flex flex-col justify-center items-center">
            <Image
                src={QuoteImg}
                alt="Quote Section"
                quality={100}
                className=" w-full"
                priority
            />
            <div className="absolute gap-10 flex drop-shadow-lg items-center flex-col">
                <h1 className="text-2xl md:text-6xl text-gray-50 font-bold font-rozhaOne">
                    “Not all those who wander are lost.”
                </h1>
                <b className=" text-xl font-medium text-gray-50">
                    J.R.R Tolkien
                </b>
            </div>
        </section>
    );
}

export default QuoteSec;

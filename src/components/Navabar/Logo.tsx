import Image from "next/image";
import Link from "next/link";
import Logo1 from "../../../public/logo.svg";
type Props = {
    className?: string;
    onClick?: () => void;
};
const Logo = (props: Props) => {
    const { className, onClick } = props;
    return (
        <div
            className={`flex gap-2 items-center ${className}`}
            onClick={onClick}
        >
            <Image width={50} height={50} src={Logo1} alt="Logo" />
            <Link
                href="/"
                className="font-rozhaOne drop-shadow-lg font-semibold text-slate-800 text-3xl"
            >
                Vancouver Trips
            </Link>
        </div>
    );
};

export default Logo;

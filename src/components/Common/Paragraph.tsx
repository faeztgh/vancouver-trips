import PropTypes from "prop-types";

type Props = {
    children: any;
    classname?: string;
};
const Paragraph = (props: Props) => {
    const { classname, children } = props;
    return (
        <p
            className={` leading-loose  text-lg font-semibold text-center ${classname}`}
        >
            {children}
        </p>
    );
};

Paragraph.prototype = {
    classname: "",
};

export default Paragraph;

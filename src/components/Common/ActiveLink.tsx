import { useRouter } from "next/router";
import Link from "next/link";
import React, { Children } from "react";

type Props = {
    children: any;
    activeclassname: string;
    href: string;
};
const ActiveLink = (props: Props) => {
    const { activeclassname, children } = props;
    const { asPath } = useRouter();
    const child = Children.only(children);
    const childClassName = child.props.className || "";
    const className =
        asPath === props.href
            ? `${childClassName} ${activeclassname}`.trim()
            : childClassName;

    return (
        <Link {...props}>
            {React.cloneElement(child, {
                className: className || null,
            })}
        </Link>
    );
};

export default ActiveLink;

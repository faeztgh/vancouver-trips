import { motion } from "framer-motion";
import { ReactNode } from "react";
import { NextSeo } from "next-seo";
import Head from "next/head";

type Props = {
    children: ReactNode;
    title?: string;
    description?: string;
    className?: string;
};

const variants = {
    hidden: { opacity: 0, x: 0, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: 0 },
};
const Layout = (props: Props) => {
    const { children, title, description, className } = props;
    return (
        <>
            <NextSeo
                title={title}
                description={description}
                openGraph={{ title, description }}
            />
            <Head>
                <title>{title}</title>
            </Head>
            <motion.main
                initial="hidden"
                animate="enter"
                exit="exit"
                variants={variants}
                transition={{ type: "tween" }}
                className={className}
            >
                {children}
            </motion.main>
        </>
    );
};

export default Layout;

import Layout from "@/components/layout/Layout";
import SignupComponent from "@/components/Auth/Signup/Signup";

const Signup = () => {
    const title = "Signup";
    return (
        <Layout title={title}>
            <SignupComponent />
        </Layout>
    );
};

export default Signup;

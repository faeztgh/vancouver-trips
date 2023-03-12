import ForgotPasswordComponent from "@/components/Auth/ForgotPassword/ForgotPasswordComponent";
import Layout from "@/components/layout/Layout";

const ForgotPassword = () => {
    const title = "Forgot Password";
    return (
        <Layout title={title} className="font-mono bg-gray-400">
            <ForgotPasswordComponent />
        </Layout>
    );
};

export default ForgotPassword;

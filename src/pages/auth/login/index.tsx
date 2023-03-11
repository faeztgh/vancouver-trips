import LoginComponent from "@/components/Auth/Login/Login";
import Layout from "@/components/layout/Layout";

const Login = () => {
    const title = "Login";
    return (
        <>
            <Layout title={title}>
                <LoginComponent />
            </Layout>
        </>
    );
};

export default Login;

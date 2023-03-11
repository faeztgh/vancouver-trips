import React, { useState } from "react";
import { Button, Form, Input } from "antd";

const onFinish = (values: any) => {
    console.log("Success:", values);
    const { name, email, subject, message } = values;
};

const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
};
const ContactSecForm: React.FC = () => (
    <Form
        name="contact"
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        scrollToFirstError
        className="w-full flex flex-col  justify-center"
    >
        {formData.map(({ name, rules, child }) => {
            return (
                <Form.Item
                    key={name}
                    name={name}
                    rules={[
                        { required: rules.required, message: rules.message },
                    ]}
                >
                    {child}
                </Form.Item>
            );
        })}
        <Form.Item className="w-full flex items-center justify-center">
            <Button
                type="default"
                className="rounded-none bg-gray-900 h-auto text-white px-8 shadow hover:drop-shadow-md py-3 text-lg"
                htmlType="submit"
            >
                Submit
            </Button>
        </Form.Item>
    </Form>
);

export default ContactSecForm;

const formData: Array<{
    name: string;
    rules: { required: boolean; message: string };
    child: React.ReactChild;
}> = [
    {
        name: "name",
        rules: { required: true, message: "Please input your name!" },
        child: <Input className="rounded-none" placeholder="Name" />,
    },
    {
        name: "email",
        rules: { required: true, message: "Please input your email!" },
        child: <Input className="rounded-none" placeholder="Email" />,
    },
    {
        name: "subject",
        rules: { required: true, message: "Please input your subject!" },
        child: <Input className="rounded-none" placeholder="Subject" />,
    },
    {
        name: "message",
        rules: { required: true, message: "Please type your message!" },
        child: (
            <Input.TextArea
                rows={5}
                className="rounded-none"
                placeholder="Type your message here..."
            />
        ),
    },
];

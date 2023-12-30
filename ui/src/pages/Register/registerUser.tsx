import { useState } from "react";
import { Button, Form, Input, Typography, Modal } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { registerUser, loginUser } from "../../services/registeruser.service";
interface IValues {
  email: string;
  password: string;
  username?: string;
}
const RegisterUser = () => {
  const [form] = Form.useForm();
  const [visible, setVisible] = useState(false);
  const [loginVisible, setLoginVisible] = useState(false);
  const [loginRegUser, setLoginRegUser] = useState<IValues>();
  const onFinish = (values: IValues) => {
    handleCancel();
    values?.username
      ? registerUser(values)
          .then((res) => {
            setLoginRegUser(res.user);
            console.log(res, "Register user response");
          })
          .catch((err) => console.log(err))
      : loginUser(values)
          .then((res) => {
            setLoginRegUser(res.user);
            console.log(res, "Login user response");
          })
          .catch((err) => console.log(err));
    console.log("Received values:", values);
  };
  const handleCancel = () => {
    setVisible(false);
  };
  const handleVisible = () => {
    setVisible(true);
  };
  return (
    <div className="register-page">
      <span style={{ color: "white" }}>{loginRegUser?.username}</span> &nbsp;
      <UserOutlined rev={"2"} onClick={handleVisible} />
      {visible && (
        <Modal
          open={visible}
          onCancel={handleCancel}
          footer={null}
          destroyOnClose
        >
          <div className="register-container">
            <Typography.Title level={2}>
              {loginVisible ? "Login" : "Register"}
            </Typography.Title>
            <Form
              form={form}
              name="register"
              onFinish={onFinish}
              className="register-form"
            >
              {!loginVisible && (
                <Form.Item
                  name="username"
                  rules={[
                    { required: true, message: "Please input your username!" },
                  ]}
                >
                  <Input
                    prefix={<UserOutlined className="site-form-item-icon" />}
                    type="username"
                    placeholder="Username"
                  />
                </Form.Item>
              )}
              <Form.Item
                name="email"
                rules={[
                  { required: true, message: "Please input your email!" },
                ]}
              >
                <Input
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  type="email"
                  placeholder="Email"
                />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  { required: true, message: "Please input your password!" },
                ]}
              >
                <Input
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="Password"
                />
              </Form.Item>
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="register-form-button"
                  // onClick={() => navigate("/register")}
                >
                  {loginVisible ? "Login" : "Register"}
                </Button>
              </Form.Item>

              <Form.Item style={{ display: "flex", justifyContent: "center" }}>
                <Button
                  type="primary"
                  className="login-form-button"
                  onClick={() => {
                    setLoginVisible(!loginVisible);
                  }}
                >
                  {!loginVisible ? "Already have an account?" : "Register"}
                </Button>
              </Form.Item>
            </Form>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default RegisterUser;

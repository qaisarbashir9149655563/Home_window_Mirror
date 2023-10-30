import React from "react";
import { Typography, Layout } from "antd";
import BookAnAppButton from "../../utils/bookAnAppointment";

const { Content } = Layout;
const { Title, Paragraph } = Typography;
const About = () => {
  return (
    <Content style={{ padding: "24px" }}>
      <Title level={2}>About Us{"true"}</Title>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec ante
        vel justo iaculis bibendum. Suspendisse potenti.
      </Paragraph>
      <Paragraph>
        Fusce nec orci ac libero rutrum varius. Quisque finibus, est ac auctor
        commodo, erat leo dignissim libero.
      </Paragraph>
      <BookAnAppButton />
    </Content>
  );
};

export default About;

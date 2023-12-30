import React from "react";
import { Typography, Layout } from "antd";
import BookAnAppButton from "../../utils/bookAnAppointment";

const { Content } = Layout;
const { Title, Paragraph } = Typography;
const About = () => {
  return (
    <Content style={{ padding: "44px" }}>
      <Title level={1}>Mirror And Decoration </Title>
      <Title level={4}>Welcome to MirrorCrafters</Title>
      <Paragraph>
        At MirrorCrafters, we believe that every reflection tells a story.
        Founded with a passion for elevating homes through the beauty of
        mirrors, we invite you to explore a world where style meets reflection.
      </Paragraph>
      <Title level={4}>Our Mission</Title>
      <Paragraph>
        MirrorCrafters is on a mission to transform spaces with carefully
        curated mirrors that transcend functionality to become stunning works of
        art. We understand the power of a well-placed mirror — it's not just a
        reflection; it's a statement.
      </Paragraph>
      <Title level={4}>The MirrorCrafters Difference</Title>
      <Paragraph>
        What sets us apart is our dedication to quality and design. Our mirrors
        are more than mere reflections; they are handcrafted pieces that
        redefine spaces. From contemporary sleekness to timeless elegance, our
        diverse collection caters to every aesthetic inclination.
      </Paragraph>
      <Title level={4}>Customization for Your Unique Style</Title>
      <Paragraph>
        We understand that every home is unique. That's why MirrorCrafters
        offers customization options, allowing you to tailor your mirror to fit
        seamlessly into your space. Choose from a variety of sizes, frames, and
        finishes to create a mirror that perfectly aligns with your vision.
      </Paragraph>
      <Title level={4}>MirrorCrafters in the Community</Title>
      <Paragraph>
        MirrorCrafters is not just about mirrors; it's about building a
        community. Discover how we are involved in local initiatives, supporting
        charities, and embracing sustainable practices. When you choose
        MirrorCrafters, you're not just enhancing your home; you're contributing
        to a positive impact in the community.
      </Paragraph>
      <Paragraph>
        Welcome to MirrorCrafters, where reflections become art, and homes tell
        stories. Transform your space today with mirrors that capture the
        essence of your style.
      </Paragraph>
      <BookAnAppButton />
    </Content>
  );
};

export default About;

import styled from "styled-components";
import NavigateButtons from "../Components/NavigateButtons";
import Title from "../Components/Title";

const AboutWrapper = styled.div`
  margin-top: 30px;
`;

const ContentWrapper = styled.p`
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
`;

const LinkWrapper = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
`;
const About = () => {
  return (
    <>
      <Title />
      <NavigateButtons />
      <AboutWrapper>
        <ContentWrapper> Contact 💌 : rhdtkqkr@gmail.com </ContentWrapper>
        <ContentWrapper> Dipper MAP 🧑🏻‍💻 :</ContentWrapper>
        <LinkWrapper href="http://localhost:8545/" style={{ color: "#fefcf3" }}>
          Dipper MapApp
        </LinkWrapper>
        <ContentWrapper>Notion 💻 : </ContentWrapper>
        <LinkWrapper
          href="https://www.notion.so/1daedee6bf864d0494dd1c14f3b9986e?v=fe3a8dd4779a433c9e6e725607a7f913"
          style={{ color: "#fefcf3" }}
        >
          https://www.notion.so/1daedee6bf864d0494dd1c14f3b9986e?v=fe3a8dd4779a433c9e6e725607a7f913
        </LinkWrapper>
      </AboutWrapper>
    </>
  );
};

export default About;

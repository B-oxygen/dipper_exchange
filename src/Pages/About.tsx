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
        <LinkWrapper
          href="https://dipper-beta.vercel.app/mint2"
          style={{ color: "#fefcf3" }}
        >
          Dipper NFT
        </LinkWrapper>
        <ContentWrapper>Discord 💻 : </ContentWrapper>
        <LinkWrapper
          href="https://discord.gg/Hyt8V3Na"
          style={{ color: "#fefcf3" }}
        >
          아슬란 디스코드
        </LinkWrapper>
      </AboutWrapper>
    </>
  );
};

export default About;

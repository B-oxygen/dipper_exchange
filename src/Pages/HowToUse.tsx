import styled from "styled-components";
import NavigateButtons from "../Components/NavigateButtons";
import Title from "../Components/Title";

const ExplanationWrapper = styled.div`
  font-size: 18px;
  margin-top: 20px;
  margin-bottom: 5px;
  margin-left: 20px;
`;

const HowToUse = () => {
  return (
    <>
      <Title />
      <NavigateButtons />
      <ExplanationWrapper>1. 동해물과 백두산이</ExplanationWrapper>
      <ExplanationWrapper>2. 마르고 닳도록</ExplanationWrapper>
      <ExplanationWrapper>
        3. 가나다라 마바사 아자차카 타파하
      </ExplanationWrapper>
      <ExplanationWrapper>4. 크리스마스 잘보내세요</ExplanationWrapper>
      <br />
      <br />
      <br />
      <ExplanationWrapper>
        혹시 문제나 개선에 대한 아이디어가 있으시다면
      </ExplanationWrapper>
      <ExplanationWrapper>
        언제든지 연락주시면 감사하겠습니다.
      </ExplanationWrapper>
    </>
  );
};

export default HowToUse;

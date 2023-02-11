import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const MainTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  padding-top: 20px;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  cursor: pointer;
  color: #fffdff;
  text-shadow: 0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px #31b68a,
    0 0 82px #175d46, 0 0 92px #4c6d62, 0 0 102px #0fa, 0 0 151px #0fa;
`;

const SubTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 500;
  display: flex;
  justify-content: center;
`;

const Title = () => {
  const navigate = useNavigate();

  return (
    <>
      <MainTitle onClick={() => navigate("/")}>DIPPER's Flea Market</MainTitle>
      <SubTitle>Exchange stuff for Exchange Students</SubTitle>
    </>
  );
};

export default Title;

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import styled from "styled-components";

import Title from "../Components/Title";

import { storageData } from "../atoms";
import NavigateButtons from "../Components/NavigateButtons";

const RouteName = styled.input`
  border: none;
  border-radius: 5px;
  display: block;
  margin-top: 20px;
  margin-left: 20px;
  width: 120px;
  padding-top: 3px;
  padding-bottom: 3px;
  font-size: 15px;
`;

const RouteSort = styled.select`
  display: block;
  border: none;
  border-radius: 5px;
  margin-top: 10px;
  margin-left: 20px;
  padding-top: 3px;
  padding-bottom: 3px;
  width: 124px;
  font-size: 15px;
`;

const DescriptionWriteSection = styled.textarea`
  display: block;
  border: none;
  border-radius: 5px;
  margin-top: 10px;
  margin-left: 20px;
  width: 55vw;
  height: 30vw;
  font-size: 15px;
  resize: none;
  flex-wrap: nowrap;
`;

const SubmitButton = styled.button`
  border: none;
  border-radius: 5px;
  background-color: #222831;
  color: #fefcf3;
  padding: 5px;
  margin-top: 10px;
  margin-right: 5px;
  margin-left: 20px;
  font-size: 15px;
  cursor: pointer;
`;

const Write = () => {
  const navigate = useNavigate();

  const [writtenData, setWrittenData] = useRecoilState(storageData);
  const [routeName, setRouteName] = useState("");
  const [routeSort, setRouteSort] = useState("전체");
  const [routeDescription, setRouteDescription] = useState("");

  const handleSubmit = () => {
    const item = {
      routeName,
      routeSort,
      routeDescription,
      writtenDate: new Date().toLocaleDateString(),
      indexDate: new Date().toString(),
    };
    const newArr = [item, ...writtenData];
    // eslint-disable-next-line no-template-curly-in-string
    localStorage.setItem("storedItem", JSON.stringify(newArr));
    setWrittenData(newArr);
    navigate("/");
  };

  return (
    <>
      <Title />
      <NavigateButtons />
      <RouteName
        type="text"
        placeholder="물건명"
        onChange={(e) => setRouteName(e.target.value)}
      />
      <RouteSort onChange={(e) => setRouteSort(e.target.value)}>
        <option>팝니다</option>
        <option>디지털기기</option>
        <option>생활가전/가구/인테리어</option>
        <option>생활/주방</option>
        <option>여성의류/잡화</option>
        <option>남성의류/잡화</option>
        <option>뷰티/미용</option>
        <option>스포츠/레저</option>
        <option>취미/게임/음반</option>
        <option>도서</option>
        <option>가공식품</option>
        <option>반려동물용품</option>
        <option>식물</option>
        <option>기타</option>
        <option>삽니다</option>
      </RouteSort>
      <DescriptionWriteSection
        typeof="text"
        placeholder="당신의 물건을 설명해주세요"
        onChange={(e) => setRouteDescription(e.target.value)}
      />
      <SubmitButton onClick={() => handleSubmit()}>저장하기</SubmitButton>
    </>
  );
};

export default Write;

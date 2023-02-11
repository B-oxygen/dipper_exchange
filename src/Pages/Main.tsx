import React from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import { Idata } from "../atoms";

import {
  storageData,
  selectedRouteSortAtom,
  selectedRouteNameAtom,
  selectedWrittenDateAtom,
} from "../atoms";
import NavigateButtons from "../Components/NavigateButtons";
import Descriptions from "../Components/Description";
import Title from "../Components/Title";

const FilterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

const Filter = styled.select`
  border-color: #fefcf3;
  border-radius: 3px;
  background-color: #222831;
  color: #fefcf3;
  padding: 5px 5px;
  margin-left: 5px;
  margin-right: 5px;
  font-size: 15px;
  cursor: pointer;
`;

const WritingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PhraseWrapper = styled.div`
  margin-top: 80px;
  margin-bottom: 40px;
  text-align: center;
`;

const WritingButton = styled.button`
  border: 1px solid #fefcf3;
  border-radius: 5px;
  background-color: #222831;
  color: #fefcf3;
  padding: 15px;
  cursor: pointer;
`;

// styled-components end.
// getStoredProductTitle: writtenData에서 ProductTitle만 가져와 중복을 제거한 배열을 반환
const getStoredRouteName = (writtenData: Idata[]) => {
  const beforeSetArr: string[] = [];
  for (let i in writtenData) {
    beforeSetArr.push(writtenData[i].routeName);
  }
  const routeNameArr = beforeSetArr.filter(
    (name, idx) => beforeSetArr.indexOf(name) === idx
  );
  routeNameArr.unshift("전체");
  return routeNameArr;
};

const Main = () => {
  const navigate = useNavigate();

  // writtenData: localStorage에 저장되어있는, 이미 작성된 글에 대한 데이터
  const writtenData = useRecoilValue(storageData);
  const routeNameArr = getStoredRouteName(writtenData);

  const [selectedRouteName, setSelectedRouteName] = useRecoilState(
    selectedRouteNameAtom
  );
  const [selectedRouteSort, setSelectedRouteSort] = useRecoilState(
    selectedRouteSortAtom
  );
  const [selectedWrittenDate, setSelectedWrittenDate] = useRecoilState(
    selectedWrittenDateAtom
  );

  const handleSelectedRouteName = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedRouteName(e.target.value);
  };
  const handleSelectedRouteSort = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedRouteSort(e.target.value);
  };
  const handleSelectedWrittenDate = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedWrittenDate(e.target.value);
  };

  return (
    <>
      <Title />
      <FilterWrapper>
        <Filter value={selectedRouteName} onChange={handleSelectedRouteName}>
          {routeNameArr.map((productTitle, idx) => (
            <option value={productTitle} key={idx}>
              {productTitle}
            </option>
          ))}
        </Filter>
        <Filter value={selectedRouteSort} onChange={handleSelectedRouteSort}>
          <option>전체</option>
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
        </Filter>
        <Filter
          value={selectedWrittenDate}
          onChange={handleSelectedWrittenDate}
        >
          <option>최신순</option>
          <option>오래된순</option>
        </Filter>
      </FilterWrapper>

      <NavigateButtons />

      {writtenData.length === 0 ? (
        <WritingWrapper>
          <PhraseWrapper>
            물건이 전부 팔렸네요 !<br></br>
            저희의 첫 손님이 되어주시겠어요 ?
          </PhraseWrapper>
          <WritingButton onClick={() => navigate("/write")}>
            작성하러 가기
          </WritingButton>
        </WritingWrapper>
      ) : (
        <Descriptions />
      )}
    </>
  );
};

export default Main;

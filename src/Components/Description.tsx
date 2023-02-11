import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";

import {
  Idata,
  selectedRouteNameAtom,
  selectedRouteSortAtom,
  selectedWrittenDateAtom,
  storageData,
  toEditData,
} from "../atoms";

const DescriptionsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #fefcf3;
  border-radius: 5px;
  margin: 15px;
`;

const Data = styled.div`
  margin-left: 5px;
  margin-top: 10px;
  margin-bottom: 5px;
`;

const ButtonWrapper = styled.div`
  display: flex;
`;

const Button = styled.button`
  border: none;
  background-color: #222831;
  color: #fefcf3;
  margin-top: 10px;
  margin-right: 5px;
  cursor: pointer;
`;

const Descriptions = () => {
  const navigate = useNavigate();

  const [writtenData, setWrittenData] = useRecoilState(storageData);
  // 사용자가 편집 버튼을 눌렀을 때 Edit페이지로 들고 갈 정보를 담은 atom
  const [, setDataToEdit] = useRecoilState(toEditData);

  // 사용자의 클릭 대로 정렬하기 위한 useState
  const [sortedData, setSortedData] = useState(writtenData);
  const selectedProductTitle = useRecoilValue(selectedRouteNameAtom);
  const selectedProductSort = useRecoilValue(selectedRouteSortAtom);
  const selectedWrittenDate = useRecoilValue(selectedWrittenDateAtom);

  useEffect(() => {
    // 주식 이름별 정렬
    let firstTmpArr,
      secondTmpArr,
      thirdTmpArr: Idata[] = [];
    if (selectedProductTitle === "전체") {
      firstTmpArr = writtenData.filter((data) => data.routeName !== "");
    } else {
      firstTmpArr = writtenData.filter(
        (data) => data.routeName === selectedProductTitle
      );
    }
    // 주식 국가별 정렬
    if (selectedProductSort === "전체") {
      secondTmpArr = firstTmpArr.filter((data) => data.routeSort !== "");
    } else {
      secondTmpArr = firstTmpArr.filter(
        (data) => data.routeSort === selectedProductSort
      );
    }
    // 날짜별 정렬
    if (selectedWrittenDate === "최신순") {
      thirdTmpArr = [...secondTmpArr];
      thirdTmpArr.sort();
    } else {
      thirdTmpArr = [...secondTmpArr];
      thirdTmpArr.sort().reverse();
    }
    setSortedData(thirdTmpArr);
  }, [
    selectedProductTitle,
    selectedProductSort,
    selectedWrittenDate,
    writtenData,
  ]);

  const handleDeletion = (data: Idata) => {
    const tmpArr = [...writtenData];
    const editedArr = tmpArr.filter((tmp) => tmp.indexDate !== data.indexDate);
    setWrittenData(editedArr);
    localStorage.setItem("storedItem", JSON.stringify(editedArr));
  };

  // 수정 버튼이 클릭된 글의 정보를 가지고 atom변경, Edit페이지로 이동
  const handleEdition = (
    routeName: string,
    routeSort: string,
    routeDescription: string,
    indexDate: string,
    writtenDate: string
  ) => {
    const existData = {
      routeName,
      routeSort,
      routeDescription,
      indexDate,
      writtenDate,
    };
    setDataToEdit(existData);
  };

  return (
    <>
      {sortedData.map((data, idx) => {
        return (
          <Description key={idx}>
            <DescriptionsWrapper>
              <Data>물건명: {data.routeName} </Data>
              <ButtonWrapper>
                <Button
                  onClick={() => {
                    handleDeletion(data);
                  }}
                >
                  삭제
                </Button>
                <Button
                  onClick={() => {
                    handleEdition(
                      data.routeName,
                      data.routeSort,
                      data.routeDescription,
                      data.indexDate,
                      data.writtenDate
                    );
                    navigate("/edit");
                  }}
                >
                  수정
                </Button>
              </ButtonWrapper>
            </DescriptionsWrapper>
            <Data>분류: {data.routeSort} </Data>
            <Data>작성된 날짜: {data.writtenDate} </Data>
            <Data>
              <div style={{ whiteSpace: "pre-wrap", lineHeight: "1.5em" }}>
                {data.routeDescription}
              </div>
            </Data>
          </Description>
        );
      })}
    </>
  );
};

export default Descriptions;

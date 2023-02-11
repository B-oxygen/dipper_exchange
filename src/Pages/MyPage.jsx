import styled from "styled-components";
import NavigateButtons from "../Components/NavigateButtons";
import Title from "../Components/Title";
import { useState, useEffect } from "react";
import axios from "axios";

const ExplanationWrapper = styled.div`
  font-size: 18px;
  margin-top: 20px;
  margin-bottom: 5px;
  margin-left: 20px;
`;
const MyPage = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const fetchUsers = async () => {
    try {
      // 요청이 시작 할 때에는 error 와 users 를 초기화하고
      setError(null);
      setData(null);
      // loading 상태를 true 로 바꿉니다.
      setLoading(true);
      const response = await axios.get(
        "http://localhost:8545/user" //설정해놓은 주소
      );
      console.log(response);
      setData(response.data); // 데이터는 response.data 안에 들어있습니다.
    } catch (e) {
      setError(e);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchUsers();
  }, []);
  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!data) return null;

  return (
    <>
      <Title />
      <NavigateButtons />
      <ExplanationWrapper>
        {data.map((item) => (
          <li key={item.id}>
            {item.id} ({item.password})
          </li>
        ))}
      </ExplanationWrapper>
    </>
  );
};

export default MyPage;

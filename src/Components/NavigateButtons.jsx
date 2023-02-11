import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Web3 from "web3";

const WriteAboutWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  padding-left: 20px;
  padding-right: 15px;
`;

const Button = styled.button`
  border: none;
  background-color: #222831;
  color: #fefcf3;
  border-radius: 5px;
  padding: 5px;
  margin-right: 5px;
  font-size: 15px;
  cursor: pointer;
`;

const NavigateButtons = () => {
  const navigate = useNavigate();
  const [web3, setWeb3] = useState(null);

  useEffect(() => {
    window.ethereum.on("accountsChanged", (accounts) => {
      console.log(accounts);
    });

    window.ethereum.on("chainChanged", async (chainId) => {
      if (window.ethereum.networkVersion !== 5) {
        await window.ethereum.request({
          method: "wallet_switchEthereumChain",
          params: [{ chainId: "0x5" }],
        });
      }
    });
  }, []);

  const metamaskConnection = useCallback(async () => {
    if (window.ethereum) {
      const web3Instance = new Web3(window.ethereum);
      setWeb3(web3Instance);
      try {
        if (window.ethereum.networkVersion !== 5) {
          await window.ethereum.request({
            method: "wallet_switchEthereumChain",
            params: [{ chainId: "0x5" }],
          });
        }

        await window.ethereum.request({
          method: "eth_requestAccounts",
        });
      } catch (error) {
        console.error(`Error:${error}`);
      }
    } else if (window.web3) {
      const web3Instance = new Web3(window.web3.currentProvider);
      setWeb3(web3Instance); // 예전 legacy version 사용하는 경우
    } else {
      console.log("MetaMask should be installed!");
    }
  }, []);
  return (
    <WriteAboutWrapper>
      <Button onClick={() => navigate("/write")}>글 작성하러 가기</Button>
      <div>
        <Button onClick={() => navigate("/")}> 홈으로 돌아가기 </Button>
        <Button onClick={() => navigate("/about")}>About</Button>
        <Button onClick={() => navigate("/howtouse")}>How to Use</Button>
        <Button onClick={() => navigate("/mypage")}>My Page</Button>
        <Button onClick={metamaskConnection}>connect</Button>
      </div>
    </WriteAboutWrapper>
  );
};

export default NavigateButtons;

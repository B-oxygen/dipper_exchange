import { Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import styled from "styled-components";

import About from "./Pages/About";
import Edit from "./Pages/Edit";
import HowToUse from "./Pages/HowToUse";
import Main from "./Pages/Main";
import Write from "./Pages/Write";

const Wrapper = styled.div`
  border-radius: 10px;
  background-color: #393e46;
  min-height: 85vh;
  margin-top: 60px;
  padding-bottom: 10px;
`;

function App() {
  return (
    <>
      <RecoilRoot>
        <div className="App">
          <Wrapper>
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/write" element={<Write />} />
              <Route path="/edit" element={<Edit />} />
              <Route path="/howtouse" element={<HowToUse />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </Wrapper>
        </div>
      </RecoilRoot>
    </>
  );
}

export default App;

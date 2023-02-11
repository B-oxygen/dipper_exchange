import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset}

    body {
        background-color: #222831;
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: "Nanum Myeongjo", serif;
        color: #FEFCF3;
    }

    @media (min-width: 650px) {
        .App {
            width: 70vw;
        }
    }

    @media (max-width: 650px) {
        .App {
            width: 90vw;
        }
    }
`;

export default GlobalStyle;

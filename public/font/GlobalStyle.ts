import { createGlobalStyle } from "styled-components";
import "../font/font.css";

const GlobalFontStyle = createGlobalStyle`
    * {
        font-family: "SpoqaHanSans Bold.woff2";
        margin: 0;
    }
`;

export default GlobalFontStyle;

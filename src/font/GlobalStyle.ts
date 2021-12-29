
import { createGlobalStyle, GlobalStyleComponent, DefaultTheme } from "styled-components";
import "../font/font.css";

export const GlobalFontStyle : GlobalStyleComponent<{}, DefaultTheme> = createGlobalStyle`
    * {
        font-family: "SpoqaHanSans Bold.woff2";
        margin: 0;
    }
`;
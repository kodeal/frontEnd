import { createGlobalStyle } from 'styled-components';
import {reset} from 'styled-reset';
const GlobalFontStyle = createGlobalStyle`
    ${reset}
    * {
        font-family: "SpoqaHanSans Bold";
        src: url("./SpoqaHanSans_subset/Spoqa\ Han\ Sans\ Bold.woff2");
        margin: 0;
    }
`;

export default GlobalFontStyle;

import { createGlobalStyle } from "styled-components";
import Poppins from "assets/fonts/Poppins-Regular.woff";
import Poppins2 from "assets/fonts/Poppins-Regular.woff2";
import PoppinsBold from "assets/fonts/Poppins-Bold.woff";
import PoppinsBold2 from "assets/fonts/Poppins-Bold.woff2";

export default createGlobalStyle`
    @font-face {
        font-family: 'Poppins';
        src: local('Poppins'), local('Poppins'),
        url(${Poppins}) format('woff'),
        url(${Poppins2}) format('woff2');
        font-weight: 300;
        font-style: normal;
    }
    @font-face {
        font-family: 'Poppins-Bold';
        src: local('PoppinsBold'), local('PoppinsBold'),
        url(${PoppinsBold}) format('woff'),
        url(${PoppinsBold2}) format('woff2');
        font-weight: 300;
        font-style: normal;
    }
`;

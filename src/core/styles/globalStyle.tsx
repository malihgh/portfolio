import {createGlobalStyle} from 'styled-components';
import Poppins from 'assets/fonts/Poppins-Regular.woff';
import Poppins2 from 'assets/fonts/Poppins-Regular.woff2';


export default createGlobalStyle`
    @font-face {
        font-family: 'Poppins';
        src: local('Poppins'), local('Poppins'),
        url(${Poppins}) format('woff'),
        url(${Poppins2}) format('woff2');
        font-weight: 300;
        font-style: normal;
    }
`;

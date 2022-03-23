import { createGlobalStyle } from "styled-components";

import Tungsten from "./TungstenSemiBold.ttf";

export default createGlobalStyle`
@font-face {
    font-family: 'Tungsten';
    src: local('Tungsten'), url(${Tungsten}) format('truetype');
}
`;

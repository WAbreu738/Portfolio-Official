// GlobalStyles.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body, html {
    height: 100%;
    margin: 0;
    font-family: 'Lato', sans-serif;
    background: radial-gradient(ellipse at bottom, #1B2735 0%, #090A0F 100%);
    overflow: hidden;
  }
`;

export default GlobalStyles;


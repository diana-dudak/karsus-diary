import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${normalize}
  ${reset}
  @import url('https://fonts.googleapis.com/css?family=El+Messiri:400,700&display=swap&subset=cyrillic');

  body {
    font-family: 'El Messiri', sans-serif;
    font-size: 18px;
    background-color: #1F1432;
    color: #BEA6A0;
    padding: 1rem;
  }

  a {
    color: #BEA6A0;
    text-decoration: none;
    cursor: pointer;
  }
`

export default GlobalStyle;
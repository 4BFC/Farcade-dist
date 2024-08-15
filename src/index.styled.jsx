import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.min.css');

  :root {
    --main-color-navy-01: #010026;
    --main-color-navy-02: #020039;
    --main-color-navy-03: #1a1a3c;

    --main-color-blue-01: #0038ff;
    --main-color-blue-02: #2f5cfb;
    --main-color-blue-03: #bbc6ee;
    --main-color-blue-04: #4285f4;

    --sub-color-yellow-01: #ffed1d;
    --sub-color-yellow-02: #d6df22;
    --sub-color-yellow-03: #615b14;

    --grey-color-grey-01: #252525;
    --grey-color-grey-02: #656565;
    --grey-color-grey-03: #d9d9d9;

    --white-color: #ffffff;
    --black-color: #000000;
    --grey-color: #5e5e5e;

    --gradient-color-blue-01: #0057ff;
    --gradient-color-blue-02: #2f5cfb;
    --gradient-color-blue-03: #bbc6ee;
    --gradient-color-navy-03: #1a1a3c;

    --guide-line-color: #44695d;

    --font-size-xxl: 28px;
    --font-size-xl: 24px;
    --font-size-l: 20px;
    --font-size-xm: 16px;
    --font-size-m: 14px;
    --font-size-s: 12px;
    --font-size-xs: 11px;

    --font-family-Regular: 'Pretendard Variable';
  }

  *,
  ::before,
  ::after {
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  ol,
  ul {
    margin: 0;
    padding: 0;
    font-weight: normal;
  }

  input {
    outline: none;
    border: none;
    background: none;
  }

  button {
    outline: none;
    border: none;
    cursor: pointer;
    background: none;
  }

  textarea {
    resize: none;
    outline: none;
    border: none;
  }

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  body {
    background-color: var(--main-color-navy-01);
    font-family: 'Pretendard Variable';
    color: var(--white-color);
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100vh;
    min-height: auto;
    max-width: 450px;
    margin: 0 auto;
  }
`;

export default GlobalStyle;

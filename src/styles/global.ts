import { css } from '@emotion/react';

export const global = css`
  :root {
    --gray-01: #fbfbfb;
    --gray-02: #f5f4f3;
    --gray-03: #dfdfdf;
    --gray-04: #c1c1c1;
    --gray-05: #a5a5a5;
    --gray-06: #8b8b8b;
    --gray-07: #6f6f6f;
    --gray-08: #555;
    --gray-09: #333;
    --gray-10: #171717;

    --primary-orange: #ff7648;
    --primary-orange-light: #ff916d;
    --blue: #5865f2;
    --red: #f36a6a;
    --green: #4dc591;

    --label-color-01: #bf77db;
    --label-color-02: #dd5e56;
    --label-color-03: #d94f7a;
    --label-color-04: #ebb0c2;
    --label-color-05: #9f4db6;
    --label-color-06: #7859bc;
    --label-color-07: #5f6aba;
    --label-color-08: #5da2ee;
    --label-color-09: #5fc3d7;
    --label-color-10: #7bb872;
    --label-color-11: #a6dcbb;
    --label-color-12: #ece64c;
    --label-color-13: #f2aa46;
    --label-color-14: #ed7850;
    --label-color-15: #886f64;
    --label-color-16: #bdbcbd;
    --label-color-17: #7c8f9b;
    --label-color-18: #93bdbe;
  }

  * {
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 62.5%; // 1rem = 10px;
    font-family: 'Noto Sans KR', sans-serif;
  }

  li {
    list-style: none;
  }
`;

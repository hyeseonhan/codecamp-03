import { css } from "@emotion/react";

export const globalStyles = css`
 
  * {
    margin: 0;
    box-sizing: border-box;
    /* font-size: 30px; */y
    /* font-family: "myfont"; */
  }

  @font-face {
    font-family: "NB"; // 폰트이름
    src: url("/font/ckhans.otf"); // 폰트위치
  }

`;

// *{ } 여기에 넣으면 한번에 다 적용됨.

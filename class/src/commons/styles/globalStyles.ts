import { css } from "@emotion/react";

export const globalStyles = css`
  @font-face {
    font-family: "myfont"; // 폰트이름
    src: url("/fonts/scifibit.ttf"); // 폰트위치
  }

  * {
    margin: 0;
    box-sizing: border-box;
    /* font-size: 30px; */
    /* font-family: "myfont"; */
  }
`;

// *{ } 여기에 넣으면 한번에 다 적용됨.

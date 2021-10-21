import styled from "@emotion/styled";
import { breakPoints } from "../../src/commons/styles/media";

// css-in-jsx 방식
const Wrapper = styled.div`
  width: 1000px;
  height: 1000px;
  background-color: red;

  /* @media (min-width: 768px) and (max-width: 1199px) {
    width: 500px;
    height: 500px;
    background-color: green;
  } */

  @media ${breakPoints.tablet} {
    width: 500px;
    height: 500px;
    background-color: green;
  }

  @media ${breakPoints.mobile} {
    width: 100px;
    height: 100px;
    background-color: blue;
    // display: none; 숨기고 싶을 때
  }
`;

export default function ResponsiveMediaPage() {
  return <Wrapper>상자</Wrapper>;
}

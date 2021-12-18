import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

export const Wrapper = styled.div`
  /* background-color: #f04237; */
  height: 65px;
  font-family: "NB"; // 글로벌스타일에서 적용한 폰트
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;

  @media ${breakPoints.mobile} {
    width: 100%;
    display: flex;
    justify-content: space-between;
    /* border: 1px solid red; */
    margin: 0px;
  }

  @media ${breakPoints.phone} {
    width: 350px;
    display: flex;
    justify-content: space-between;
    margin: 0px;
  }
`;

export const CategoryBtn = styled.img`
  display: none;
  @media ${breakPoints.mobile} {
    width: 30px;
    margin-left: 20px;
    display: initial;
  }

  @media ${breakPoints.phone} {
    width: 30px;
    display: initial;
  }
`;

export const Home = styled.img`
  width: 83px;
  height: 40px;

  cursor: pointer;
  :hover {
    opacity: 0.4;
  }
`;

export const Fake = styled.div`
  @media ${breakPoints.mobile} {
    width: 47px;
    height: 30px;
    border: 1px solid black;
    border: none;
  }

  @media ${breakPoints.phone} {
    width: 30px;
    height: 30px;
    border: 1px solid black;
    border: none;
  }
`;

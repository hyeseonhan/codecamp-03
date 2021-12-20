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
    cursor: pointer;
  }

  @media ${breakPoints.phone} {
    width: 30px;
    display: initial;
    cursor: pointer;
  }
`;

export const Category = styled.div`
  display: none;

  @media ${breakPoints.mobile} {
    display: initial;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1;
    transition: all 0.35s;
    position: fixed;
    top: 0;
    left: ${(props) => (props.isOpen ? 0 : "-100%")};
  }

  @media ${breakPoints.phone} {
    display: initial;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1;
    transition: all 0.35s;
    position: fixed;
    top: 0;
    left: ${(props) => (props.isOpen ? 0 : "-100%")};
  }
`;

export const CategoryBack = styled.div`
  display: none;

  @media ${breakPoints.mobile} {
    display: initial;
    width: 300px;
    height: 100vh;
    background-color: white;
    z-index: 2;
    transition: all 0.35s;
    position: fixed;
    top: 0;
    left: ${(props) => (props.isOpen ? 0 : "-300px")};
  }

  @media ${breakPoints.phone} {
    display: initial;
    width: 300px;
    height: 100vh;
    background-color: white;
    z-index: 99;
    transition: all 0.35s;
    position: fixed;
    top: 0;
    left: ${(props) => (props.isOpen ? 0 : "-300px")};
  }
`;

export const CloseBtn = styled.img`
  width: 20px;
  margin: 14px;
  cursor: pointer;
`;

export const CateNameWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

export const CateName = styled.div`
  font-family: "LightBold";
  font-size: 21px;
  font-weight: 900;
  color: #979293;
  cursor: pointer;
  margin-bottom: 10px;
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

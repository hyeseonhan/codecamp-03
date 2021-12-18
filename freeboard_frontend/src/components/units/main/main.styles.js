import styled from "@emotion/styled";
import { breakPoints } from "../../../commons/styles/media";

export const Wrapper = styled.div`
  font-family: "NB"; // 글로벌스타일에서 적용한 폰트
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgb(16, 16, 16);

  @media ${breakPoints.tablet} {
    width: 100%;
  }

  @media ${breakPoints.mobile} {
    width: 100%;
  }

  @media ${breakPoints.phone} {
    width: 100%;
  }
`;

export const SliderWrapper = styled.div`
  margin-top: 50px;
  /* padding: 20px; */
  width: 400px;
  /* width: 25vw; */
  /* background-color: #f04237; */

  @media ${breakPoints.phone} {
    margin-top: 20px;
    width: 90%;
  }
  }
`;

export const SliderAlbum = styled.img`
  width: 100%;
  /* height: 100%; */
  /* width: 25vw; */
  /* height: 85vh; */
  /* margin: 60px; */
  /* box-shadow: 8px 8px 8px 8px; */
  /* margin: auto; */
  align-items: center;
  justify-content: center;
`;

export const Song = styled.div`
  color: white;
  font-size: 45px;
  font-weight: 400;
  line-height: 1.2;
  text-transform: lowercase;
  text-align: center;
  margin-bottom: 30px;
  width: 90%;

  @media ${breakPoints.phone} {
    font-size: 30px;
    margin-bottom: 20px;
  }
`;

export const StreamButton = styled.div`
  width: 230px;
  color: white;
  font-family: "Light";
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  font-size: 15px;
  border: 2px solid #fff;
  font-weight: 600;
  padding: 10.8px 10.8px;
  margin-bottom: 70px;
  :hover {
    color: black;
    background-color: white;
  }

  @media ${breakPoints.mobile} {
    margin-bottom: 50px;
  }

  @media ${breakPoints.phone} {
    width: 180px;
    font-size: 12px;
    border: 1px solid #fff;
    font-weight: 500;
    padding: 7px 7px;
    margin-bottom: 40px;
  }
`;

export const Sub = styled.div`
  color: white;
  font-size: 31px;
  font-weight: 400;
  line-height: 1.2;
  margin-bottom: 30px;

  @media ${breakPoints.phone} {
    font-size: 20px;
  }
`;

export const SubWrapper = styled.div`
  width: 560px;
  margin-bottom: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  /* border: 1px solid red; */

  @media ${breakPoints.mobile} {
    width: 100%;
    justify-content: space-around;
  }

  @media ${breakPoints.phone} {
    width: 90%;
    justify-content: space-around;
    margin-bottom: 30px;
  }
`;

export const Select = styled.select`
  width: 160px;
  height: 50px;
  font-size: 20px;
  color: white;
  background-color: transparent;
  border-top: 1px solid black;
  border-left: 1px solid black;
  border-right: 1px solid black;
  border-bottom: 2px solid white;
  text-align: start;
  cursor: pointer;
  /* text-decoration: underline; */

  @media ${breakPoints.mobile} {
    width: 25%;
  }

  @media ${breakPoints.phone} {
    width: 25%;
    height: 30px;
    font-size: 13px;
  }
`;

export const EnterButton = styled.button`
  margin-bottom: 60px;
  width: 185px;
  height: 31px;
  font-size: 16px;
  font-weight: 800;
  color: white;
  background-color: transparent;
  border: 1px solid #fefefe;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  :hover {
    color: black;
    background-color: white;
  }

  @media ${breakPoints.phone} {
    width: 23%;
    height: 25px;
    font-size: 11px;
    margin-bottom: 30px;
  }
`;

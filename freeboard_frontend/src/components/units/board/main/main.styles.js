import styled from "@emotion/styled";

export const Wrapper = styled.div`
  /* height: 100%; */
  font-family: "NB"; // 글로벌스타일에서 적용한 폰트
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: black;
`;

export const Home = styled.img`
  width: 83px;
  height: 40px;
`;

export const Head = styled.div`
  padding: 20px;
`;

export const MainImg = styled.img`
  width: 30%;
  height: 30%;
  margin: 60px;
`;

export const Song = styled.div`
  color: white;
  font-size: calc(0.92593vw + 27.04px);
  font-weight: 400;
  line-height: 1.2;
  text-transform: lowercase;
  text-align: center;
  margin: 0 auto;
  padding-bottom: 30px;
  width: 90%;
`;

export const StreamButton = styled.div`
  width: 240px;
  color: white;
  font-family: "Light";
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  font-size: 16px;
  border: 2px solid #fff;
  font-weight: 400;
  padding: 12.8px 12.8px;
`;

export const SubWrapper = styled.div`
  margin-bottom: 30px;
`;

export const Select = styled.select`
  width: 100px;
  height: 40px;
  font-size: 20px;
  color: white;
  background-color: transparent;
  border: none;
`;

export const Sub = styled.div``;

export const EnterButton = styled.button`
  margin-bottom: 30px;
  width: 185px;
  height: 31px;
  font-size: 16px;
  color: white;
  background-color: transparent;
  border: 1px solid #fefefe;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  :hover {
    opacity: 0.4;
    /* background-color: #f04237; */
  }
`;

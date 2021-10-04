import styled from "@emotion/styled";

export const Wrapper = styled.div`
  /* height: 100%; */
  font-family: "NB"; // 글로벌스타일에서 적용한 폰트
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgb(16, 16, 16);
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
  font-size: 57px;
  font-weight: 400;
  line-height: 1.2;
  text-transform: lowercase;
  text-align: center;
  margin: 0 auto;
  padding-bottom: 30px;
  width: 90%;
`;

export const StreamButton = styled.div`
  width: 280px;
  color: white;
  font-family: "Light";
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  font-size: 18px;
  border: 3px solid #fff;
  font-weight: 600;
  padding: 14.8px 14.8px;
  margin-bottom: 170px;
`;

export const Sub = styled.div`
  color: white;
  font-size: 31px;
  font-weight: 400;
  line-height: 1.2;
  margin-bottom: 30px;
`;

export const SubWrapper = styled.div`
  margin-bottom: 50px;
`;

export const SelectYear = styled.select`
  width: 160px;
  height: 50px;
  font-size: 20px;
  color: white;
  background-color: transparent;
  margin-right: 40px;
  border-top: 1px solid black;
  border-left: 1px solid black;
  border-right: 1px solid black;
  border-bottom: 2px solid white;
  text-align: start;
  /* text-decoration: underline; */
`;

export const SelectMonth = styled.select`
  width: 160px;
  height: 50px;
  font-size: 20px;
  color: white;
  background-color: transparent;
  border: none;
  margin-right: 40px;
  border-top: 1px solid black;
  border-left: 1px solid black;
  border-right: 1px solid black;
  border-bottom: 2px solid white;
  text-align: start;
`;

export const SelectDate = styled.select`
  width: 160px;
  height: 50px;
  font-size: 20px;
  color: white;
  background-color: transparent;
  border: none;
  margin-right: 40px;
  border-top: 1px solid black;
  border-left: 1px solid black;
  border-right: 1px solid black;
  border-bottom: 2px solid white;
  text-align: start;
`;

export const EnterButton = styled.button`
  margin-bottom: 90px;
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

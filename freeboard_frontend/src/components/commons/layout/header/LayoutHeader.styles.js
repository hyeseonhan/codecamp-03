import styled from "@emotion/styled";

export const Wrapper = styled.div`
  /* background-color: #f04237; */
  height: 65px;
  font-family: "NB"; // 글로벌스타일에서 적용한 폰트
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Home = styled.img`
  width: 83px;
  height: 40px;
  cursor: pointer;
  :hover {
    opacity: 0.4;
  }
`;

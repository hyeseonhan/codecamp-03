import styled from "@emotion/styled";

export const Wrapper = styled.div`
  /* background-color: #f04237; */

  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  /* border-top: 9px solid black; */
`;

export const MenuItem = styled.div`
  font-family: "NB";
  font-size: 20px;
  font-weight: 700;
  position: relative;
  color: black;
  margin: 30px;
  cursor: pointer;
  :hover {
    opacity: 0.4;
  }
`;

import styled from "@emotion/styled";

export const Wrapper = styled.div`
  /* background-color: #f04237; */
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-top: 7px solid black;
  width: 1200px;
  padding-top: 50px;
  padding: 50px;
`;

export const MenuItem = styled.div`
  font-family: "LightBold";
  font-size: 23px;
  font-weight: 600;
  position: relative;
  color: black;
  margin: 30px;
  cursor: pointer;
  :hover {
    opacity: 0.4;
  }
`;

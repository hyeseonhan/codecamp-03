import styled from "@emotion/styled";

export const Wrapper = styled.div`
  background-color: white;
  height: 115px;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;

  display: block;
  font-family: "NB";
  text-align: center;
  border-top: 1px solid rgb(170, 170, 170);
`;

export const Content = styled.div`
  margin: 8px 18px;
  font-weight: 900;
  font-size: 14px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const UnderButton = styled.div`
  background-color: black;
  color: white;
  margin: 10px;
  padding: 4px 22px;
  border: 1px solid black;
  border-radius: 4px;
  cursor: pointer;
  :hover {
    opacity: 0.4;
    background-color: #f04237;
  }
`;

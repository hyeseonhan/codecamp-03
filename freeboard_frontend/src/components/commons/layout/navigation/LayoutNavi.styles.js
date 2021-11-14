import styled from "@emotion/styled";

export const Wrapper = styled.div`
  /* background-color: #f04237; */
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-top: 5px solid black;
  border-bottom: 5px solid black;
  width: 1200px;
  padding: 30px;
`;

export const MenuSome = styled.div`
  font-family: "LightBold";
  font-size: 23px;
  font-weight: 700;
  position: relative;
  color: black;
  margin: 45px;
  padding-left: 16px;
  cursor: pointer;
  :hover {
    /* opacity: 0.4; */
    color: #f04237;
  }
`;

export const MenuItem = styled.div`
  font-family: "LightBold";
  font-size: 23px;
  font-weight: 700;
  position: relative;
  color: black;
  margin: 45px;
  cursor: pointer;
  :hover {
    /* opacity: 0.4; */
    color: #f04237;
  }
`;

export const MenuHome = styled.div`
  font-family: "LightBold";
  font-size: 28px;
  font-weight: 800;
  position: relative;
  color: black;
  margin: 20px;
  cursor: pointer;
  :hover {
    /* opacity: 0.4; */
    color: #f04237;
  }
  border: 1px solid black;
  padding: 5px 15px 2px 15px;
  background-color: black;
  color: #f04237;
`;

export const MenuLogin = styled.div`
  width: 113.887px;
  text-align: center;
  /* border: 1px solid black; */
  font-family: "LightBold";
  font-size: 23px;
  font-weight: 700;
  position: relative;
  color: black;
  margin: 45px;
  cursor: pointer;
  :hover {
    /* opacity: 0.4; */
    color: #f04237;
  }
`;

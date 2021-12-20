import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

export const Wrapper = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 80px;

  @media ${breakPoints.mobile} {
    width: 667px;
    border-top: none;
    padding-top: 20px;
    /* background-color: green; */
    /* padding-top: 0px; */
  }

  @media ${breakPoints.phone} {
    width: 375px;
    border-top: none;
    padding-top: 20px;
    /* background-color: blue; */
    /* padding-top: 0px; */
  }
`;

export const Title = styled.div`
  margin-bottom: 25px;
  font-family: "LightBold";
  font-size: 20px;
  font-weight: 800;
`;

export const Error = styled.div`
  color: red;
  margin-bottom: 25px;
`;

export const Email = styled.input`
  width: 300px;
  padding-left: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-family: "LightBold";
  font-weight: 700;
`;

export const Name = styled.input`
  width: 300px;
  padding-left: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-family: "LightBold";
  font-weight: 700;
`;

export const Password = styled.input`
  width: 300px;
  padding-left: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-family: "LightBold";
  font-weight: 700;
`;

export const PasswordCheck = styled.input`
  width: 300px;
  padding-left: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-family: "LightBold";
  font-weight: 700;
`;

export const CreateButton = styled.button`
  width: 300px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 25px;
  font-family: "LightBold";
  font-weight: 700;
  background-color: black;
  color: #f04237;
  cursor: pointer;
  :hover {
    background-color: #f04237;
    color: black;
  }
`;

export const BackPage = styled.div`
  margin-bottom: 25px;
  font-family: "LightBold";
  font-weight: 800;
  font-size: 13px;
  cursor: pointer;
  :hover {
    color: #f04237;
  }
`;

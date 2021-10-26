import styled from "@emotion/styled";

export const State = styled.div`
  font-weight: 600;
  font-size: 17px;
  color: white;
  margin-top: 50px;
  margin-bottom: 50px;
`;

export const StateContent = styled.div`
  width: 900px;
  height: 450px;
  border: 1px solid red;
  border: none;
  font-size: 12px;
  background-color: black;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
`;

export const Picture = styled.img`
  width: 200px;
  height: 200px;
  border: 3px solid black;
  border-radius: 70%;
  background-color: white;
`;

export const UploadImage = styled.button`
  width: 200px;
  height: 200px;
  border: 3px solid black;
  border-radius: 70%;
  background-color: white;
  /* color: white; */
`;

export const StateButton = styled.button`
  font-weight: 600;
  font-size: 16px;
  color: white;
  margin-top: 50px;
  border: none;
  background-color: transparent;
  cursor: pointer;
  :hover {
    color: #f04237;
  }
`;

export const UploadImageHidden = styled.input`
  display: none;
`;

import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const SearchWrapper = styled.div`
  width: 268px;
  height: 52px;
  /* border-radius: 15px; */
  /* background-color: black; */
  padding: 0px 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  color: black;
  border: 3px solid black;
  margin-right: 24px;
`;

export const InnerWrapper = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  margin: 0px 20px;
  ::placeholder {
    font-weight: 700;
    color: black;
    font-family: "LightBold";
  }
`;

export const SearchButton = styled.button`
  width: 78px;
  height: 52px;
  font-weight: 600;
  background-color: black;
  color: white;
  border: none;
  /* border-radius: 15px; */
`;

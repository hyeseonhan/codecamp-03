import styled from "@emotion/styled";

export const Searchbar = styled.div`
  width: 776px;
  height: 52px;
  border-radius: 15px;
  /* background-color: black; */
  padding: 0px 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  color: black;
  border: 2px solid black;

  /* border: none; */
`;

export const SearchbarInput = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  /* background: black; */
  margin: 0px 20px;
  /* box-shadow: 0px 0px 5px black; */
  ::placeholder {
    font-weight: 600;
    color: black;
    font-family: "LightBold";
  }
`;

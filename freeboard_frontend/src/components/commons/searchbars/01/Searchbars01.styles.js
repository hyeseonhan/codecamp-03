import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

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

  @media ${breakPoints.mobile} {
    width: 476px;
    height: 42px;
  }

  @media ${breakPoints.phone} {
    width: 346px;
    height: 32px;
  }
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

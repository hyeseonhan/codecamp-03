import styled from "@emotion/styled";
import ReactPlayer from "react-player";

export const Wrapper = styled.div`
  width: 1200px;
  /* margin: 50px; */
  padding-top: 80px;
  padding-bottom: 100px;
  /* padding-left: 102px;
  padding-right: 102px; */
  display: flex;
  flex-direction: column;
  align-items: center;
  /* border: 7px solid black; */
  /* box-shadow: 0px 0px 10px black; */
`;

export const Search = styled.input`
  width: 250px;
  height: 35px;
  margin-bottom: 20px;
`;

export const InputWrapper = styled.div`
  /* margin: 40px; */
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
`;

export const Youtube = styled(ReactPlayer)`
  margin: 30px;
`;

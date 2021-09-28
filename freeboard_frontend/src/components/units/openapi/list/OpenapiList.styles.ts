import styled from "@emotion/styled";
import ReactPlayer from "react-player";

export const Wrapper = styled.div`
  width: 1200px;
  border: 1px solid black;
  margin: 50px;
  padding-top: 80px;
  padding-bottom: 100px;
  padding-left: 102px;
  padding-right: 102px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 7px solid black;
  box-shadow: 0px 0px 10px black;
`;

export const Search = styled.input`
  width: 250px;
  height: 35px;
  margin-bottom: 20px;
`;

export const InputWrapper = styled.div`
  margin: 40px;
`;

export const Youtube = styled(ReactPlayer)`
  margin: 30px;
`;

// export const Youtube = styled.span`
//   /* display: flex;
//   justify-content: center; */
//   margin: 30px;
//   padding: 30px;
// `;

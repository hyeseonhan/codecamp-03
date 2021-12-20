import styled from "@emotion/styled";
import ReactPlayer from "react-player";
import { breakPoints } from "../../../../commons/styles/media";

export const Wrapper = styled.div`
  width: 1200px;
  padding-top: 80px;
  padding-bottom: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${breakPoints.mobile} {
    width: 667px;
    padding-top: 10px;
    padding-bottom: 0px;
  }

  @media ${breakPoints.phone} {
    width: 375px;
    padding-top: 0px;
    padding-bottom: 0px;
  }
`;

export const Search = styled.input`
  width: 250px;
  height: 35px;
  margin-bottom: 20px;

  @media ${breakPoints.mobile} {
    margin-bottom: 10px;
  }

  @media ${breakPoints.phone} {
    margin-bottom: 10px;
  }
`;

export const InputWrapper = styled.div`
  /* margin: 40px; */
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;

  @media ${breakPoints.phone} {
    width: 370px;
  }
`;

export const Youtube = styled(ReactPlayer)`
  margin: 30px;
`;

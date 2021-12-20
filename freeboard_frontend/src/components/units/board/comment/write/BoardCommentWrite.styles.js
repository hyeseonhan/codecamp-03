import styled from "@emotion/styled";
import { Rate } from "antd";
import { breakPoints } from "../../../../../commons/styles/media";

export const Wrapper = styled.div`
  width: 1200px;
  margin-left: 100px;

  @media ${breakPoints.mobile} {
    width: 667px;
    margin-left: 10px;
  }

  @media ${breakPoints.phone} {
    width: 365px;
    margin-left: 30px;
  }
`;

export const LabelWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-top: 40px;

  @media ${breakPoints.phone} {
    padding-top: 20px;
  }
`;

export const TitleIcon = styled.img`
  width: 30px;
  height: 18px;
  padding-right: 12px;
`;

export const Title = styled.div`
  font-size: 18px;
`;

export const InputWrapper = styled.div`
  padding-top: 40px;
  width: 1200px;
  padding-bottom: 40px;

  @media ${breakPoints.mobile} {
    width: 550px;
    margin: none;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media ${breakPoints.phone} {
    width: 345px;
    padding-top: 10px;
  }
`;

export const UpperLine = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const WriterInput = styled.input`
  width: 180px;
  height: 52px;
  border: 1px solid #bdbdbd;
  font-size: 16px;
  font-weight: 500;
  line-height: 23.68px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 20px;
  margin-right: 24px;

  @media ${breakPoints.phone} {
    width: 90px;
    height: 28px;
    font-size: 13px;
    margin-right: 15px;
  }
`;

export const PasswordInput = styled.input`
  width: 180px;
  height: 52px;
  border: 1px solid #bdbdbd;
  font-size: 16px;
  font-weight: 500;
  line-height: 23.68px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 20px;
  margin-right: 26px;

  @media ${breakPoints.phone} {
    width: 90px;
    height: 28px;
    font-size: 13px;
    margin-right: 16px;
  }
`;

export const MiddleLine = styled.div`
  border: 1px solid #bdbdbd;
  margin-top: 20px;
`;

export const ContentInput = styled.textarea`
  width: 100%;
  height: 108px;
  resize: none;
  border: none;
  font-size: 16px;
  font-weight: 500;
  line-height: 23.68px;
  padding: 20px 0px 0px 20px;

  @media ${breakPoints.mobile} {
    width: 550px;
    margin: none;
    padding: none;
  }

  @media ${breakPoints.phone} {
    width: 340px;
    margin: none;
    font-size: 13px;
  }
`;

export const LowerLine = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-top: 1px solid lightgray;
`;

export const WordCount = styled.div`
  display: flex;
  align-items: center;
  padding-left: 20px;
  font-size: 16px;
  font-weight: 500;
  line-height: 23.68px;
  color: #bdbdbd;
`;

export const PostButton = styled.div`
  border: 1px solid black;
  border: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 91px;
  height: 52px;
  font-size: 16px;
  font-weight: 500;
  line-height: 23.68px;
  color: white;
  background-color: black;
  cursor: pointer;
`;

export const Star = styled(Rate)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

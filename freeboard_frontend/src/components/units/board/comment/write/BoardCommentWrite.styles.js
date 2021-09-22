import styled from "@emotion/styled";
import { Rate } from "antd";

export const Wrapper = styled.div`
  width: 1200px;
  margin-left: 100px;
`;

export const LabelWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 40px;
`;

export const TitleIcon = styled.img`
  padding-right: 14px;
`;

export const Title = styled.div`
  font-size: 18px;
`;

export const InputWrapper = styled.div`
  padding-top: 40px;
  width: 1200px;
  padding-bottom: 40px;
`;

export const UpperLine = styled.div`
  display: flex;
  flex-direction: row;
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
  /* padding-left: 20px; */
  margin-right: 24px;
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
  margin-right: 26px;
`;

export const MiddleLine = styled.div`
  margin-top: 20px;
`;

export const ContentInput = styled.textarea`
  border-left: 1px solid #bdbdbd;
  border-right: 1px solid #bdbdbd;
  border-top: 1px solid #bdbdbd;
  border-bottom: 1px solid #f2f2f2;
  width: 1200px;
  height: 161px;
  font-size: 16px;
  font-weight: 500;
  line-height: 23.68px;
  /* padding-left: 20px; */
  margin-right: 24px;
  resize: none;
`;

export const LowerLine = styled.div`
  border-left: 1px solid #bdbdbd;
  border-right: 1px solid #bdbdbd;
  border-bottom: 1px solid #bdbdbd;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
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
  /* align-items: center; */
`;

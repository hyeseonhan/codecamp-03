import styled from "@emotion/styled";
import { IProps } from "./ProductPost.types";

export const Wrapper = styled.form`
  width: 1200px;
  padding-top: 80px;
  padding-bottom: 100px;
  padding-left: 102px;
  padding-right: 102px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.div`
  font-family: "LightBold";
  font-weight: 600;
  font-size: 36px;
  margin-bottom: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContentsWrapper = styled.div`
  width: 996px;
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
`;

export const UndderInput = styled.textarea`
  width: 996px;
  height: 268px;
  border: 1px solid #bdbdbd;
  resize: none;
  padding-left: 16px;
`;

export const UnderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  /* align-items: initial; */
  width: 996px;
`;

export const ImageWrapper = styled.div`
  width: 384px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const TitleName = styled.div`
  margin-bottom: 16px;
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  line-height: 23.68px;
`;

export const OptionWrapper = styled.div``;

export const RadioButton = styled.input`
  cursor: pointer;
`;

export const RadioLabel = styled.label`
  margin-left: 10px;
  margin-right: 12px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

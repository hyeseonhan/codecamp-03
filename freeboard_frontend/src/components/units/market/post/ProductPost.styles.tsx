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
`;

// export const AboveWarpper = styled.div`
//   width: 996px;
//   height: 52px;
//   border: 1px solid #bdbdbd;
//   border-bottom: none;
// `;

export const UndderInput = styled.textarea`
  width: 996px;
  height: 268px;
  border: 1px solid #bdbdbd;
  resize: none;
  padding-left: 16px;
`;

export const MapWrapper = styled.div`
  /* border: 1px solid red; */
  display: flex;
  flex-direction: row;
`;

export const LocationWrapper = styled.div`
  margin-right: 24px;
`;

export const Location = styled.input`
  width: 384px;
  height: 252px;
`;

export const MapInfoWrapper = styled.div`
  margin-bottom: 40px;
`;

export const GpsWrapper = styled.div`
  margin-bottom: 40px;
`;

export const GpsInnerWrapper = styled.div``;

export const Lat = styled.input`
  width: 108px;
  height: 52px;
  margin-right: 21px;
  padding-left: 20px;
`;

export const GpsIcon = styled.img`
  /* width: 14px;
  height: 20px; */
  margin-right: 21px;
`;

export const Lng = styled.input`
  width: 108px;
  height: 52px;
  padding-left: 20px;
`;

export const AddressWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* border: 1px solid red; */
  height: 120px;
`;

export const Address = styled.input`
  width: 588px;
  height: 52px;
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

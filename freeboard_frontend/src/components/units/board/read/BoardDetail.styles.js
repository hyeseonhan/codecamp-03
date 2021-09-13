import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1200px;
  border: 1px solid black;
  margin: 100px 100px 0px 100px;
  padding-top: 20px;
  padding-bottom: 80px;
  padding-left: 102px;
  padding-right: 102px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  box-shadow: 0px 0px 10px gray;
`;

export const WriterWrapper = styled.div`
  border-bottom: 1px solid #bdbdbd;
  width: 100%;
  display: flex;
  flex-direction: row;
  padding-bottom: 20px;
`;
export const WriterWrapperLeft = styled.div`
  width: 604px;
  padding-top: 60px;
  display: flex;
  flex-direction: row;
`;
export const WriterWrapperRight = styled.div`
  width: 392px;
  padding-left: 15px;
`;
export const ProfilImage = styled.div`
  color: gray;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const WriterDate = styled.div`
  padding-left: 16.67px;
`;
export const Location = styled.div`
  width: 368px;
  height: 64px;
  border: 1px solid #898989;
  background-color: #898989;
  color: white;
  padding-left: 16px;
  padding-top: 8px;
  padding-right: 16px;
  padding-bottom: 8px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 23.68px;
`;
export const Triangle = styled.div`
  width: 0px;
  height: 0px;
  /* border-top: 6px solid #898989; */
  border-right: 15px solid #898989;
  border-bottom: 15px solid transparent;
  /* border-left: 8px solid transparent; */
  margin-left: 353px;
`;
export const Address1 = styled.div``;
export const Address2 = styled.div``;
export const Icon = styled.div`
  /* padding-top: 19.33px; */
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  /* align-items: center; */
`;

export const FileIcon = styled.div`
  color: #ffd600;
  padding-right: 29.33px;
  /* padding-top: 19.33px; */
`;

export const MapIcon = styled.div`
  color: #ffd600;
  /* padding-top: 4.67px; */
`;

export const Writer = styled.div`
  font-size: 24px;
  font-weight: 500;
  line-height: 35.52px;
  font-style: normal;
  ${(props) => (props.color === true ? "yellow" : "gray")}
`;

export const Date = styled.div`
  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 23.68px;
`;

export const InputWrapper = styled.div`
  width: 100%;
`;

export const Title = styled.div`
  /* border: 3px solid red; */
  font-size: 36px;
  font-weight: 700;
  padding-top: 80px;
  padding-bottom: 40px;
  ${(props) => (props.color === true ? "yellow" : "gray")}
`;

export const ContentsImage = styled.div`
  width: 996px;
  height: 480px;
`;

export const Contents = styled.div`
  padding-top: 40px;
  font-size: 16px;
  font-weight: 400;
  line-height: 23.68px;
  ${(props) => (props.color === true ? "yellow" : "gray")}
`;
export const Youtube = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 120px;
`;

export const LikeWrapper = styled.div`
  padding-top: 162px;
  display: flex;
  flex-direction: row;
`;

export const Like = styled.div`
  padding-right: 59px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const LikeImage = styled.div`
  color: #ffd600;
`;

export const LikeCount = styled.div`
  color: #ffd600;
  font-size: 18px;
  font-weight: 400;
  line-height: 26.64px;
  font-style: normal;
`;

export const Dislike = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const DislikeImage = styled.div`
  color: #828282;
`;

export const DislikeCount = styled.div`
  color: #828282;
  font-size: 18px;
  font-weight: 400;
  font-style: normal;
  line-height: 26.64px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 80px;
  width: 1200px;
  margin-left: 100px;
`;

export const Button = styled.div`
  width: 179px;
  height: 45px;
  border: 1px solid #bdbdbd;
  margin: 0px 12px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: 500;
  line-height: 23.68px;
  cursor: pointer;
`;

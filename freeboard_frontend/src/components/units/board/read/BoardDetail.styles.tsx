import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";
import { IBoardDetailEmotion } from "./BoardDetail.types";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InnerWrapper = styled.div`
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

  @media ${breakPoints.mobile} {
    width: 667px;
    border: 1px solid black;
    margin: 0px 0px 0px 0px;
    padding-top: 20px;
    padding-bottom: 80px;
    padding-left: 102px;
    padding-right: 102px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: none;
    box-shadow: 0px 0px 10px gray;
    /* background-color: blue; */
  }

  @media ${breakPoints.phone} {
    width: 355px;
    border: 1px solid #bdbdbd;
    margin: 0px 0px 0px 0px;
    padding-top: 5px;
    padding-bottom: 10px;
    padding-left: 00px;
    padding-right: 00px;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: none;
  }
`;

export const WriterWrapper = styled.div`
  border-bottom: 1px solid #bdbdbd;
  width: 100%;
  display: flex;
  flex-direction: row;
  padding-bottom: 20px;

  @media ${breakPoints.mobile} {
    width: 667px;
  }

  @media ${breakPoints.phone} {
    width: 345px;
    display: flex;
    flex-direction: column;
    padding-bottom: 10px;
  }
`;

export const WriterWrapperLeft = styled.div`
  width: 614px;
  padding-top: 60px;
  display: flex;
  flex-direction: row;
  align-items: center;

  @media ${breakPoints.mobile} {
    width: 400px;
    padding-top: 10px;
    justify-content: center;
    /* border: 1px solid red; */
  }

  @media ${breakPoints.phone} {
    width: 345px;
    padding-top: 10px;
    justify-content: center;
  }
`;

export const WriterWrapperRight = styled.div`
  width: 382px;
  padding-left: 15px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding-top: 60px;

  @media ${breakPoints.mobile} {
    width: 160px;
    padding-top: 0px;
  }

  @media ${breakPoints.phone} {
    width: 345px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding-top: 0px;
    padding-left: 0px;
  }
`;

export const ProfilImage = styled.img`
  margin-right: 16.67px;
  width: 50px;
  height: 50px;
`;
export const WriterDate = styled.div`
  /* padding-left: 16.67px; */
`;

export const Icon = styled.div`
  /* padding-top: 19.33px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center; */
`;

export const FileIcon = styled.img`
  padding-right: 29.33px;
`;

export const MapIcon = styled.img`
  /* color: #ffd600; */
  /* padding-top: 4.67px; */
`;

export const Writer = styled.div`
  font-size: 24px;
  font-weight: 500;
  line-height: 35.52px;
  font-style: normal;
  ${(props: IBoardDetailEmotion) => (props.color === true ? "yellow" : "gray")}
`;

export const Date = styled.div`
  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 23.68px;
`;

export const InputWrapper = styled.div`
  width: 100%;

  @media ${breakPoints.mobile} {
    width: 667px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media ${breakPoints.phone} {
    width: 345px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const Title = styled.div`
  /* border: 3px solid red; */
  font-size: 36px;
  font-weight: 700;
  padding-top: 80px;
  padding-bottom: 40px;
  ${(props: IBoardDetailEmotion) => (props.color === true ? "yellow" : "gray")}
`;

export const ContentsImage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Image = styled.img`
  width: 796px;
  height: 440px;
  margin-bottom: 30px;

  @media ${breakPoints.mobile} {
    width: 400px;
  }

  @media ${breakPoints.phone} {
    width: 200px;
  }
`;

export const Contents = styled.div`
  padding-top: 40px;
  font-size: 16px;
  font-weight: 400;
  line-height: 23.68px;
  ${(props: IBoardDetailEmotion) => (props.color === true ? "yellow" : "gray")}

  @media ${breakPoints.phone} {
    width: 345px;
  }
`;
export const Youtube = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 120px;

  @media ${breakPoints.phone} {
    width: 345px;
  }
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

export const LikeImage = styled.img`
  width: 22px;
  height: 20px;
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

export const DislikeImage = styled.img`
  width: 21px;
  height: 19px;
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
  padding-bottom: 87px;
  border-bottom: 1px solid #bdbdbd;

  @media ${breakPoints.mobile} {
    width: 667px;
    margin-left: 20px;
  }

  @media ${breakPoints.phone} {
    width: 345px;
    margin-left: 20px;
    padding-bottom: 47px;
  }
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

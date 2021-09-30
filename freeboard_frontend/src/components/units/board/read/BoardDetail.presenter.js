import {
  Wrapper,
  WriterWrapper,
  WriterWrapperLeft,
  WriterWrapperRight,
  ProfilImage,
  WriterDate,
  // Location,
  // Triangle,
  // Address1,
  // Address2,
  Icon,
  FileIcon,
  MapIcon,
  Writer,
  Date,
  InputWrapper,
  Title,
  ContentsImage,
  Image,
  Contents,
  Youtube,
  LikeWrapper,
  ButtonWrapper,
  Button,
  Like,
  LikeImage,
  LikeCount,
  Dislike,
  DislikeImage,
  DislikeCount,
} from "./BoardDetail.styles";

import ReactPlayer from "react-player";
import { Tooltip } from "antd";

// import BoardComment from "../comment/BoardComment.container";

export default function BoardDetailUI(props) {
  return (
    <>
      <Wrapper>
        <WriterWrapper>
          <WriterWrapperLeft>
            <ProfilImage src="/images/avatar.png" />
            <WriterDate>
              <Writer>{props.data && props.data.fetchBoard.writer}</Writer>
              <Date>
                {props.data?.fetchBoard.createdAt.slice(0, 10) + " "}
                {props.data?.fetchBoard.createdAt.slice(11, 19)}
              </Date>
            </WriterDate>
          </WriterWrapperLeft>
          <WriterWrapperRight>
            {/* <Location> */}
            <FileIcon src="/images/file.png" />
            <Tooltip
              placement="topRight"
              title={`${props.data?.fetchBoard.boardAddress?.address}
              ${props.data?.fetchBoard.boardAddress?.addressDetail}`}
            >
              <MapIcon src="/images/location.png" />
            </Tooltip>
          </WriterWrapperRight>
        </WriterWrapper>
        <InputWrapper>
          <Title>{props.data && props.data.fetchBoard.title}</Title>
          <ContentsImage>
            {props.data?.fetchBoard.images.map((el, index) => (
              <Image src={`https://storage.googleapis.com/${el}`} key={index} />
            ))}
            {/* <img width="996" height="480" src="/images/posty.jpeg" /> */}
          </ContentsImage>
          <Contents>{props.data && props.data.fetchBoard.contents}</Contents>
        </InputWrapper>
        <Youtube>
          {" "}
          <ReactPlayer
            url={props.data?.fetchBoard.youtubeUrl}
            width="486px"
            height="240px"
          />
        </Youtube>
        <LikeWrapper>
          <Like>
            <LikeImage
              onClick={props.onClickLike}
              id={props.data?.fetchBoard._id}
              src="/images/thumb.png"
            />
            <LikeCount>{props.data?.fetchBoard.likeCount}</LikeCount>
          </Like>
          <Dislike>
            <DislikeImage
              onClick={props.onClickDislike}
              id={props.data?.fetchBoard._id}
              src="/images/downthumb.png"
            />
            <DislikeCount>{props.data?.fetchBoard.dislikeCount}</DislikeCount>
          </Dislike>
        </LikeWrapper>
      </Wrapper>
      <ButtonWrapper>
        <Button onClick={props.onClickMoveToList}>목록으로</Button>
        <Button onClick={props.onClickMoveToEdit}>수정하러</Button>
        <Button onClick={props.onClickDelete}>삭제하기</Button>
      </ButtonWrapper>
      {/* <BoardComment /> */}
    </>
  );
}

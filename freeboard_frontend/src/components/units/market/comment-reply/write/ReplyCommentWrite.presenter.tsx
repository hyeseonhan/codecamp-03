import {
  OutWrapper,
  Wrapper,
  ReplyIcon,
  InnerWrapper,
  Contents,
  ContentsBottom,
  ContentsLength,
  Button,
} from "./ReplyCommentWrite.styles";

export default function ReplyCommentWriteUI(props) {
  return (
    <OutWrapper>
      <Wrapper>
        <ReplyIcon src="/images/replyarrow.png" />
        <InnerWrapper>
          <Contents onChange={props.onChangeContents} />
          <ContentsBottom>
            <ContentsLength>{props.contents.length}/100</ContentsLength>
            {props.isEditReply}
            <Button
              id={props.Answerel?._id}
              onClick={
                props.isEditReply ? props.onClickReply : props.onClickReplyUpate
              }
            >
              {props.isEditReply ? "답글등록" : "수정하기"}
            </Button>
          </ContentsBottom>
        </InnerWrapper>
      </Wrapper>
    </OutWrapper>
  );
}

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
            {/* {props.isEditReply && (
              <Button
                id={props.Answerel?._id}
                onClick={props.onClickReplyUpate}
              >
                수정하기
              </Button>
            )}
            {props.isCommentReply && (
              <Button id={props.Answerel?._id} onClick={props.onClickReply}>
                답글등록
              </Button>
            )} */}
            <Button
              id={props.Answerel?._id}
              onClick={
                props.isEditReply ? props.onClickReplyUpate : props.onClickReply
              }
            >
              {props.isEditReply ? "수정하기" : "답글등록"}
            </Button>
          </ContentsBottom>
        </InnerWrapper>
      </Wrapper>
    </OutWrapper>
  );
}

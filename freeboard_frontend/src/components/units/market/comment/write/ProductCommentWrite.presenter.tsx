import {
  Wrapper,
  TopWrapper,
  CommentWrapper,
  CommentIcon,
  Titlename,
  InnerWrapper,
  Avatar,
  MiddleWrapper,
  InputWrapper,
  Writer,
  Contents,
  ContentsBottom,
  ContentsLength,
  Button,
} from "./ProductCommentWrite.styles";

export default function ProductCommentWriteUI(props) {
  return (
    <Wrapper>
      <TopWrapper>
        {!props.isEdit && (
          <CommentWrapper>
            <CommentIcon src="/images/comment.png" />
            <Titlename> 문의하기</Titlename>
          </CommentWrapper>
        )}
      </TopWrapper>
      <InnerWrapper>
        {props.isEdit && <Avatar src="/images/avatar.png" />}
        <MiddleWrapper>
          <Writer>{props.el?.user?.name}</Writer>
          <InputWrapper isEdit={props.isEdit}>
            <Contents
              maxLength={100}
              onChange={props.onChangeContents}
              defaultValue={props.el?.contents}
            />
            <ContentsBottom>
              <ContentsLength>{props.contents.length}/100</ContentsLength>
              <Button
                id={props.el?._id}
                onClick={
                  props.isEdit ? props.onClickUpdate : props.onClickQuestion
                }
              >
                {props.isEdit ? "수정하기" : "문의하기"}
              </Button>
            </ContentsBottom>
          </InputWrapper>
        </MiddleWrapper>
      </InnerWrapper>
    </Wrapper>
  );
}

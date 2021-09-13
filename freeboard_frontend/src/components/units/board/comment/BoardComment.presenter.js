import {
  Wrapper,
  LabelWrapper,
  TitleIcon,
  Title,
  InputWrapper,
  UpperLine,
  WriterInput,
  PasswordInput,
  MiddleLine,
  ContentInput,
  LowerLine,
  WordCount,
  PostButton,
  CommentWrapper,
  Avatar,
  Info,
  Writer,
  Content,
  CreatedAt,
  Button,
  UpdatePencil,
  DeliteIcon,
} from "./BoardComment.styles";

export default function BoardCommentUI(props) {
  return (
    <Wrapper>
      <LabelWrapper>
        <TitleIcon src="./images/comment.png" />
        <Title>댓글</Title>
      </LabelWrapper>
      <InputWrapper>
        <UpperLine>
          <WriterInput
            name="writerInput"
            type="text"
            placeholder="작성자"
            onChange={props.onChangeWriterInput}
          />
          <PasswordInput
            name="passwordInput"
            type="password"
            placeholder="비밀번호"
            onChange={props.onChangePasswordInput}
          />
        </UpperLine>
        <MiddleLine>
          <ContentInput
            name="contentInput"
            type="text"
            placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제돌 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
            onChange={props.onChangeContentInput}
          />
          <LowerLine>
            <WordCount>00</WordCount>
            <PostButton onClick={props.onClickPost}>등록하기</PostButton>
          </LowerLine>
        </MiddleLine>
      </InputWrapper>
      <CommentWrapper>
        <Avatar src="/images/avatar.png" />
        {props.data?.fetchBoardComments.map((el) => (
          <Info>
            <Writer>{el.writer}</Writer>
            <Content>{el.contents}</Content>
            <CreatedAt>{el.createdAt}</CreatedAt>
          </Info>
        ))}
        <Button>
          <UpdatePencil src="/images/pencil.png"></UpdatePencil>
          <DeliteIcon src="/images/delite.png"></DeliteIcon>
        </Button>
      </CommentWrapper>
    </Wrapper>
  );
}

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
} from "./BoardComment.styles";

export default function BoardCommentUI() {
  return (
    <Wrapper>
      <LabelWrapper>
        <TitleIcon src="./images/comment.png" />
        <Title>댓글</Title>
      </LabelWrapper>
      <InputWrapper>
        <UpperLine>
          <WriterInput name="writerInput" type="text" placeholder="작성자" />
          <PasswordInput
            name="passwordInput"
            type="password"
            placeholder="비밀번호"
          />
        </UpperLine>
        <MiddleLine>
          <ContentInput
            name="contentInput"
            type="text"
            placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제돌 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
          />
          <LowerLine>
            <WordCount>00</WordCount>
            <PostButton>등록하기</PostButton>
          </LowerLine>
        </MiddleLine>
      </InputWrapper>
    </Wrapper>
  );
}

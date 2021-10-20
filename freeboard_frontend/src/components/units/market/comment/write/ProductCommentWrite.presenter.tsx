import {
  Wrapper,
  TopWrapper,
  CommentIcon,
  Titlename,
  InputWrapper,
  Contents,
  ContentsBottom,
  ContentsLength,
  Button,
} from "./ProductCommentWrite.styles";

export default function ProductCommentWriteUI(props) {
  return (
    <Wrapper>
      <TopWrapper>
        <CommentIcon src="/images/comment.png" />
        <Titlename> 문의하기</Titlename>
      </TopWrapper>
      <InputWrapper>
        <Contents maxLength={100} onChange={props.onChangeContents} />
        <ContentsBottom>
          <ContentsLength>{props.contents.length}/100</ContentsLength>
          <Button onClick={props.onClickQuestion}>문의하기</Button>
        </ContentsBottom>
      </InputWrapper>
    </Wrapper>
  );
}

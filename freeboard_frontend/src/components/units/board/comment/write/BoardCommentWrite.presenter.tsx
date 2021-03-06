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
  Star,
} from "./BoardCommentWrite.styles";
import { IBoardCommentWriteUIProps } from "./BoardCommentWrite.types";

export default function BoardCommentUI(props: IBoardCommentWriteUIProps) {
  return (
    <Wrapper>
      {/* 수정댓글에서는 true 일때  댓글 글씨가 안보이게  */}
      {props.isActive === props.id && (
        <LabelWrapper>
          <TitleIcon src="/images/comment.png" />
          <Title>댓글</Title>
        </LabelWrapper>
      )}
      <InputWrapper>
        <UpperLine>
          <WriterInput
            name="writerInput"
            type="text"
            placeholder="작성자"
            readOnly={Boolean(props.el?.writer)}
            defaultValue={props.el?.writer}
            onChange={props.onChangeWriterInput}
          />
          <PasswordInput
            name="passwordInput"
            type="password"
            placeholder="비밀번호"
            onChange={props.onChangePasswordInput}
          />
          <Star onChange={props.onChangeStar} />
        </UpperLine>
        <MiddleLine>
          <ContentInput
            name="contentInput"
            type="text"
            defaultValue={props.el?.contents}
            placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제돌 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
            onChange={props.onChangeContentInput}
          />
          <LowerLine>
            <WordCount>{props.ContentInput.length}/100</WordCount>
            <PostButton
              onClick={props.isActive ? props.onClickUpdate : props.onClickPost}
            >
              {props.isActive ? "수정하기" : "등록하기"}
            </PostButton>
          </LowerLine>
        </MiddleLine>
      </InputWrapper>
    </Wrapper>
  );
}

import {
  Wrapper,
  Title,
  InputWrapper,
  Lable,
  Subject,
  Contents,
  ZipcodeWrapper,
  Zipcode,
  SearchButton,
  Address,
  Youtube,
  ImageWrapper,
  UploadButton,
  OptionWrapper,
  RadioButton,
  RadioLable,
  ButtonWrapper,
  SubmitButton,
} from "../../../../styles/boards";

export default function BoardsNewPage() {
  return (
    <Wrapper>
      <Title>게시물 등록</Title>
      <InputWrapper>
        <Lable>제목</Lable>
        <Subject name="title" type="text" placeholder="제목을 작성해주세요." />
      </InputWrapper>
      <InputWrapper>
        <Lable>내용</Lable>
        <Contents name="contents" placeholder="내용을 작성해주세요." />
      </InputWrapper>
      <InputWrapper>
        <Lable>주소</Lable>
        <ZipcodeWrapper>
          <Zipcode name="zipcode" placeholder="07250" />
          <SearchButton>우편번호 검색</SearchButton>
        </ZipcodeWrapper>
        <Address />
        <Address />
      </InputWrapper>
      <InputWrapper>
        <Lable>유튜브</Lable>
        <Youtube name="youtube" placeholder="링크를 복사해주세요." />
      </InputWrapper>
      <ImageWrapper>
        <Lable>사진첨부</Lable>
        <UploadButton>
          <div>+</div>
          <div>Upload</div>
        </UploadButton>
        <UploadButton>
          <div>+</div>
          <div>Upload</div>
        </UploadButton>
        <UploadButton>
          <div>+</div>
          <div>Upload</div>
        </UploadButton>
      </ImageWrapper>
      <OptionWrapper>
        <Lable>메인 설정</Lable>
        <RadioButton type="radio" id="youtube" name="radio-button" />
        <RadioLable htmlFor="youtube" name="radio-button">
          유튜브
        </RadioLable>
        <RadioButton type="radio" id="image" name="radio-button" />
        <RadioLable htmlFor="image">사진</RadioLable>
      </OptionWrapper>
      <ButtonWrapper>
        <SubmitButton>등록하기</SubmitButton>
      </ButtonWrapper>
    </Wrapper>
  );
}

import {
  Error,
  Address,
  ButtonWrapper,
  Contents,
  ImageWrapper,
  InputWrapper,
  Label,
  OptionWrapper,
  Password,
  RadioButton,
  RadioLabel,
  SearchButton,
  Subject,
  SubmitButton,
  Title,
  // Images,
  // UploadButton,
  // UploadImage,
  Wrapper,
  Writer,
  WriterWrapper,
  Youtube,
  Zipcode,
  ZipcodeWrapper,
  EditButton,
} from "./BoardWrite.styles";
import { IBoardlWriteUIProps } from "./BoardWrite.types";

import { Modal } from "antd";
import DaumPostcode from "react-daum-postcode";
import Uploads01 from "../../../commons/uploads/01/Uploads01.container";

export default function BoardlWriteUI(props: IBoardlWriteUIProps) {
  return (
    <Wrapper>
      <Title>{props.isEdit ? "수정페이지" : "REGISTRATION"}</Title>
      <WriterWrapper>
        <InputWrapper>
          <Label>작성자</Label>
          <Writer
            name="writer"
            type="text"
            placeholder="이름을 적어주세요"
            onChange={props.onChangeWriter}
            defaultValue={props.data?.fetchBoard.writer}
          />
          <Error>{props.writerError}</Error>
        </InputWrapper>
        <InputWrapper>
          <Label>비밀번호</Label>
          <Password
            name="password"
            type="password"
            placeholder="비밀번호를 입력해주세요"
            onChange={props.onChangePassword}
          />
          <Error>{props.passwordError}</Error>
        </InputWrapper>
      </WriterWrapper>
      <InputWrapper>
        <Label>제목</Label>
        <Subject
          name="subject"
          type="text"
          placeholder="제목을 입력하세요"
          onChange={props.onChangeTitle}
          defaultValue={props.data?.fetchBoard.title}
        />
        <Error>{props.titleError}</Error>
      </InputWrapper>
      <InputWrapper>
        <Label>내용</Label>
        <Contents
          name="contents"
          placeholder="내용을 작성해주세요"
          onChange={props.onChangeContents}
          defaultValue={props.data?.fetchBoard.contents}
        />
        <Error>{props.contentsError}</Error>
      </InputWrapper>
      <InputWrapper>
        <Label>주소</Label>
        <ZipcodeWrapper>
          <Zipcode
            name="zipcode"
            placeholder="07250"
            readOnly
            value={
              props.zipcode || props.data?.fetchBoard.boardAddress?.zipcode
            }
          />
          <SearchButton
            onClick={props.onTogleAddress}
            // onComplete={props.onCompleteAddressSearch} // onComplete 다음지도에 들어있는 태그
          >
            우편번호 검색
          </SearchButton>
          {props.isOpen && (
            <Modal visible={true} onCancel={props.onTogleAddress}>
              <DaumPostcode onComplete={props.handleComplete} />
            </Modal>
          )}
        </ZipcodeWrapper>
        <Address
          readOnly
          value={props.address || props.data?.fetchBoard.boardAddress?.address}
        />
        <Address
          onChange={props.onChangeAddressDetail}
          defaultValue={
            props.addressDetail ||
            props.data?.fetchBoard.boardAddress?.addressDetail
          }
        />
      </InputWrapper>
      <InputWrapper>
        <Label>유튜브</Label>
        <Youtube
          name="youtube"
          placeholder="링크를 복사해주세요"
          onChange={props.onChangeYoutubeUrl}
          defaultValue={props.data?.fetchBoard.youtubeUrl}
        />
      </InputWrapper>
      <ImageWrapper>
        <Label>사진첨부</Label>
        {/*  1차 이미지 실ㅂ
          {props.fileUrls.map((el, index) => (
          <Uploads01
            key={`${el}_${index}`}
            index={index}
            fileUrl={el}
            onChangeFileUrls={props.onChangeFileUrls}
          />
        ))} */}
        {/* 2차 이미지 실습  */}
        {new Array(3).fill(1).map((el, index) => (
          <Uploads01
            key={`${el}_${index}`}
            index={index}
            onChangeFiles={props.onChangeFiles}
            defaultFileUrl={props.data?.fetchBoard.images?.[index]}
          />
        ))}
      </ImageWrapper>
      <OptionWrapper>
        <Label>메인설정</Label>
        <RadioButton type="radio" name="radio-button" />
        <RadioLabel htmlFor="youtube"> 유튜브</RadioLabel>
        <RadioButton type="radio" name="radio-button" />
        <RadioLabel htmlFor="image"> 사진</RadioLabel>
      </OptionWrapper>
      <ButtonWrapper>
        {!props.isEdit && (
          <SubmitButton
            onClick={props.onClickSubmit}
            color={props.color}
            disabled={!props.color}
          >
            등록하기
          </SubmitButton>
        )}
        {props.isEdit && (
          <EditButton
            color={true}
            onClick={props.onClickEdit}
            // color={props.color}
          >
            수정하기
          </EditButton>
        )}
      </ButtonWrapper>
    </Wrapper>
  );
}

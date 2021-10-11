import { useFormState } from "react-hook-form";
import Button01 from "../../../commons/buttons/01/Button01";
import ErrorMessage01 from "../../../commons/errormessages/01/ErrorMessage01";
import Input01 from "../../../commons/inputs/01/Input01";
import Uploads02 from "../../../commons/uploads/02/Uploads02.container";
import {
  Wrapper,
  Title,
  // PostButton,
  ContentsWrapper,
  TitleName,
  AboveWarpper,
  UndderInput,
  UnderWrapper,
  MapWrapper,
  LocationWrapper,
  Location,
  MapInfoWrapper,
  GpsWrapper,
  GpsInnerWrapper,
  Lat,
  GpsIcon,
  Lng,
  AddressWrapper,
  Address,
  OptionWrapper,
  RadioButton,
  RadioLabel,
} from "./ProductPost.styles";

export default function ProductPostUI(props) {
  return (
    <Wrapper onSubmit={props.handleSubmit(props.onClickPost)}>
      <Title>Product Registration</Title>
      <Input01
        name="상품명"
        type="text"
        placeholder="상품명을 작성해주세요"
        register={props.register("name")}
      />
      <ErrorMessage01 message={props.formState.errors.name?.message} />
      {/* <div>{props.formState.errors.remarks?.message}</div> 공통컴포넌트로 나누지않는 방식 */}
      <Input01
        name="한줄요약"
        type="text"
        placeholder="상품명을 작성해주세요"
        register={props.register("remarks")}
      />
      <ErrorMessage01 message={props.formState.errors.remarks?.message} />
      <ContentsWrapper>
        <TitleName>상품설명</TitleName>
        <AboveWarpper></AboveWarpper>
        <UndderInput
          name="상품설명"
          type="text"
          placeholder="상품을 설명해주세요."
          // register={props.register("contents")} 공통컴포넌트에서 불러오는게 아니므로 이렇게 쓰면 안됨
          {...props.register("contents")}
        />
        <ErrorMessage01 message={props.formState.errors.contents?.message} />
      </ContentsWrapper>
      <Input01
        name="판매가격"
        type="text"
        placeholder="판매 가격을 입력해주세요"
        register={props.register("price")}
      />
      <ErrorMessage01 message={props.formState.errors.price?.message} />
      <Input01
        name="태그입력"
        type="text"
        placeholder="#태그 #태그 #태그"
        register={props.register("tags")}
      />
      <ErrorMessage01 message={props.formState.errors.tags?.message} />
      <MapWrapper>
        <LocationWrapper>
          <TitleName>거래위치</TitleName>
          <Location></Location>
        </LocationWrapper>
        <MapInfoWrapper>
          <GpsWrapper>
            <TitleName>GPS</TitleName>
            <GpsInnerWrapper>
              <Lat placeholder="위도 (LAT)" />
              <GpsIcon src="/images/location.png" />
              <Lng placeholder="경도 (LNG)" />
            </GpsInnerWrapper>
          </GpsWrapper>
          <TitleName>주소</TitleName>
          <AddressWrapper>
            <Address />
            <Address />
          </AddressWrapper>
        </MapInfoWrapper>
      </MapWrapper>
      <UnderWrapper>
        <TitleName>사진 첨부</TitleName>
        <Uploads02 />
        <OptionWrapper>
          <TitleName>메인 사진 설정</TitleName>
          <RadioButton type="radio" name="radio-button" />
          <RadioLabel htmlFor="picture1">사진 1</RadioLabel>
          <RadioButton type="radio" name="radio-button" />
          <RadioLabel htmlFor="picture1">사진 2</RadioLabel>
        </OptionWrapper>
      </UnderWrapper>
      <Button01
        name="등록하기"
        type="submit"
        isValid={props.formState.isValid}
      />
      {/* <PostButton
        name="등록하기"
        type="submit"
        isValid={props.formState.isValid}
      >
        등록하기
      </PostButton> */}
    </Wrapper>
  );
}

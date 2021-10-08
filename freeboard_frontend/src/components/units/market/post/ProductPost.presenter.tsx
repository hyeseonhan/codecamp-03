import Inputs01 from "../../../commons/inputs/01/Inputs01";
import Uploads02 from "../../../commons/uploads/02/Uploads02.container";
import {
  Wrapper,
  Title,
  PostButton,
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
      <Inputs01
        name="상품명"
        type="text"
        placeholder="상품명을 작성해주세요"
        register={props.register("name")}
      />
      <Inputs01
        name="한줄요약"
        type="text"
        placeholder="상품명을 작성해주세요"
        register={props.register("remarks")}
      />
      <ContentsWrapper>
        <TitleName>상품설명</TitleName>
        <AboveWarpper></AboveWarpper>
        <UndderInput placeholder="상품을 설명해주세요." />
      </ContentsWrapper>
      <Inputs01
        name="판매가격"
        type="text"
        placeholder="판매 가격을 입력해주세요"
        register={props.register("price")}
      />
      <Inputs01
        name="태그입력"
        type="text"
        placeholder="#태그 #태그 #태그"
        register={props.register("tags")}
      />
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

      <PostButton>등록하기</PostButton>
    </Wrapper>
  );
}

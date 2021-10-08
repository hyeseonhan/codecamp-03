import Inputs01 from "../../../commons/inputs/01/Inputs01";
import {
  Wrapper,
  Title,
  PostButton,
  RemarkWrapper,
  TitleName,
  AboveWarpper,
  UndderInput,
  MapWrapper,
  LocationWrapper,
  Location,
  MapInfoWrapper,
  Gps,
  Address,
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
        register={props.register("name")}
      />
      <TitleName>상품설명</TitleName>
      <RemarkWrapper>
        <AboveWarpper></AboveWarpper>
        <UndderInput></UndderInput>
      </RemarkWrapper>
      <Inputs01
        name="판매가격"
        type="text"
        placeholder="판매 가격을 입력해주세요"
        register={props.register("name")}
      />
      <Inputs01
        name="태그입력"
        type="text"
        placeholder="#태그 #태그 #태그"
        register={props.register("name")}
      />
      <MapWrapper>
        <LocationWrapper>
          <TitleName>거래위치</TitleName>
          <Location></Location>
        </LocationWrapper>
        <MapInfoWrapper>
          <Gps></Gps>
          <Address />
          <Address />
        </MapInfoWrapper>
      </MapWrapper>
      <PostButton>등록하기</PostButton>
    </Wrapper>
  );
}

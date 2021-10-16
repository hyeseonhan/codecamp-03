import Button01 from "../../../commons/buttons/01/Button01";

import {
  Wrapper,
  CardWrapper,
  Headers,
  AvartarWrapper,
  Avatar,
  Info,
  Seller,
  CreatedAt,
  IconWrapper,
  LinkIcon,
  MapIcon,
  Remarks,
  ContentsWrapper,
  Top,
  InnerTop,
  Name,
  InnerBottom,
  HeartButton,
  PickedCount,
  Price,
  Images,
  Contents,
  Tags,
  MapWrapper,
  Map,
  ButtonWrapper,
  Wrapper01,
} from "./ProductDetail.styles";

export default function ProductDetailUI(props) {
  return (
    <Wrapper>
      <CardWrapper>
        <Headers>
          <AvartarWrapper>
            <Avatar src="/images/avatar.png" />
            <Info>
              <Seller>{props.data?.fetchUseditem.seller.name}</Seller>
              <CreatedAt>{props.data?.fetchUseditem.createdAt}</CreatedAt>
            </Info>
          </AvartarWrapper>
          <IconWrapper>
            <LinkIcon src="/images/link.png" />
            <MapIcon src="/images/location.png" />
          </IconWrapper>
        </Headers>
        <ContentsWrapper>
          <Top>
            <InnerTop>
              <Remarks>{props.data?.fetchUseditem.remarks}</Remarks>
              <Name>{props.data?.fetchUseditem.name}</Name>
            </InnerTop>
            <InnerBottom>
              <HeartButton src="/images/heart.png" />
              <PickedCount>{props.data?.fetchUseditem.pickedCount}</PickedCount>
            </InnerBottom>
          </Top>
          <Price>{props.data?.fetchUseditem.price}</Price>
          <Images></Images>
          <Contents>{props.data?.fetchUseditem.contents}</Contents>
          <Tags>{props.data?.fetchUseditem.tags}</Tags>
        </ContentsWrapper>
        <MapWrapper>
          <Map></Map>
        </MapWrapper>
      </CardWrapper>
      <ButtonWrapper>
        <Wrapper01 onClick={props.onClickMoveToList}>
          <Button01 name="목록으로" type="text" />
        </Wrapper01>
        <Button01 name="구매하기" type="text" />
      </ButtonWrapper>
    </Wrapper>
  );
}

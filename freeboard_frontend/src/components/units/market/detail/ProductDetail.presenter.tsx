import Button01 from "../../../commons/buttons/01/Button01";
import KakaoMapDetail from "../../../commons/kakaomap/kakaomap-detail";

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
  ItemImages,
  ItemImage,
  Contents,
  Tags,
  MapWrapper,
  Map,
  ButtonWrapper,
  // Wrapper01,
} from "./ProductDetail.styles";
import Dompurify from "dompurify";

export default function ProductDetailUI(props: any) {
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
          <ItemImages>
            {props.data?.fetchUseditem.images
              ?.filter((el: string) => el)
              .map((el: string) => (
                <ItemImage
                  key={el}
                  src={`https://storage.googleapis.com/${el}`}
                />
              ))}
          </ItemImages>
          {process.browser && (
            <Contents
              dangerouslySetInnerHTML={{
                __html: Dompurify.sanitize(props.data?.fetchUseditem.contents),
              }}
            />
          )}
          <Tags>{props.data?.fetchUseditem.tags}</Tags>
        </ContentsWrapper>
        <MapWrapper>
          <KakaoMapDetail data={props.data} />
        </MapWrapper>
      </CardWrapper>
      <ButtonWrapper>
        {/* <Wrapper01 }> */}
        <Button01
          onClick={props.onClickMoveToList}
          name="목록으로"
          type="button"
        />
        {/* </Wrapper01> */}
        <Button01 name="구매하기" type="text" />
        <Button01
          name="수정하기"
          type="button"
          onClick={props.onClickMoveToEdit}
        />
      </ButtonWrapper>
    </Wrapper>
  );
}

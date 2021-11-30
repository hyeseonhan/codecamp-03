import Button01 from "../../../commons/buttons/01/Button01";
import KakaoMapDetail from "../../../commons/kakaomap/kakaomap-detail";
import Carousel01 from "../../../commons/carousel/Carousel01/index";

import {
  Wrapper,
  CardWrapper,
  Headers,
  AvartarWrapper,
  Avatar,
  Seller,
  CreatedAt,
  IconWrapper,
  LinkIcon,
  MapIcon,
  Remarks,
  ContentsWrapper,
  InfoWrapper,
  Name,
  HeartWrapper,
  HeartButton,
  PickedCount,
  Price,
  ItemImages,
  Contents,
  Tags,
  BuyButton,
  MapWrapper,
  ButtonWrapper,
} from "./ProductDetail.styles";
import Dompurify from "dompurify";

export default function ProductDetailUI(props: any) {
  return (
    <Wrapper>
      <CardWrapper>
        <ContentsWrapper>
          <ItemImages>
            <Carousel01 data={props.data} />
          </ItemImages>
          <InfoWrapper>
            <Headers>
              <AvartarWrapper>
                post user:
                <Avatar
                  src={
                    props.data?.fetchUseditem.seller.picture
                      ? `https://storage.googleapis.com/${props.data?.fetchUseditem.seller.picture}`
                      : "/images/you.jpeg"
                  }
                />
                <Seller>{props.data?.fetchUseditem.seller.name}</Seller>
                <CreatedAt>
                  posted: {props.data?.fetchUseditem.createdAt.slice(0, 10)}
                </CreatedAt>
              </AvartarWrapper>
              <IconWrapper>
                <LinkIcon src="/images/link.png" />
                <MapIcon src="/images/location.png" />
              </IconWrapper>
            </Headers>
            <Name>{props.data?.fetchUseditem.name}</Name>
            <Remarks>{props.data?.fetchUseditem.remarks}</Remarks>
            <Tags>{props.data?.fetchUseditem.tags}</Tags>
            {process.browser && (
              <Contents
                dangerouslySetInnerHTML={{
                  __html: Dompurify.sanitize(
                    props.data?.fetchUseditem.contents
                  ),
                }}
              />
            )}
            {/* <HeartButton
                onClick={props.onClickPicked}
                src="/images/heart.png"
              /> */}
            <Price>
              {props.data?.fetchUseditem.price
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
              원
            </Price>
            <HeartWrapper>
              {!props.isPicked ? (
                <HeartButton
                  src="/images/bheart.png"
                  onClick={props.onClickPicked}
                />
              ) : (
                <HeartButton
                  src="/images/pheart.png"
                  onClick={props.onClickPicked}
                />
              )}
              <PickedCount>{props.data?.fetchUseditem.pickedCount}</PickedCount>
            </HeartWrapper>
            <BuyButton onClick={props.onClickBuy}>BUY IT NOW</BuyButton>
          </InfoWrapper>
        </ContentsWrapper>
        <MapWrapper>
          <KakaoMapDetail data={props.data} />
        </MapWrapper>
      </CardWrapper>

      <ButtonWrapper>
        <Button01
          onClick={props.onClickMoveToList}
          name="목록으로"
          type="button"
        />
        {/* <Button01 onClick={props.onClickBuy} name="구매하기" type="button" /> */}
        <Button01
          name="수정하기"
          type="button"
          onClick={props.onClickMoveToEdit}
        />
        <Button01 name="삭제하기" type="button" onClick={props.onClickDelete} />
      </ButtonWrapper>
    </Wrapper>
  );
}

import Button01 from "../../../commons/buttons/01/Button01";
import KakaoMapDetail from "../../../commons/kakaomap/kakaomap-detail";
import Carousel01 from "../../../commons/carousel/Carousel01/index";
import Carousel02 from "../../../commons/carousel/Carousel02";

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
import { useEffect, useRef, useState } from "react";
import { Tooltip } from "antd";

export default function ProductDetailUI(props: any) {
  const [mainSlick, setMainSlick] = useState(null);
  const [pagingSlick, setPagingSlick] = useState(null);
  const mainSlickRef = useRef(null);
  const pagingSlickRef = useRef(null);

  useEffect(() => {
    setMainSlick(mainSlickRef.current);
    setPagingSlick(pagingSlickRef.current);
  }, []);

  return (
    <Wrapper>
      <CardWrapper>
        <ContentsWrapper>
          <ItemImages>
            <Carousel01
              data={props.data}
              mainSlickRef={mainSlickRef}
              pagingSlick={pagingSlick}
            />
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
                <Tooltip
                  placement="topRight"
                  title={`${props.data?.fetchUseditem.useditemAddress?.address} ${props.data?.fetchUseditem.useditemAddress?.addressDetail}`}
                >
                  <MapIcon src="/images/location.png" />
                </Tooltip>
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
            <Carousel02
              data={props.data}
              pagingSlickRef={pagingSlickRef}
              mainSlick={mainSlick}
            />
            <Price>
              {props.data?.fetchUseditem.price
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
              ???
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
          name="????????????"
          type="button"
        />
        {/* <Button01 onClick={props.onClickBuy} name="????????????" type="button" /> */}
        <Button01
          name="????????????"
          type="button"
          onClick={props.onClickMoveToEdit}
        />
        <Button01 name="????????????" type="button" onClick={props.onClickDelete} />
      </ButtonWrapper>
    </Wrapper>
  );
}

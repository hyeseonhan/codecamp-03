import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export const Wrapper = styled.div`
  width: 100%;
  height: 630px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  overflow: hidden;
`;

const InnerWrapper = styled.div`
  width: 190px;
  height: 190px;
  /* border: 3px solid black; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px;
`;

const HeartInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: right;
  /* margin-top: 12.25px; */
`;

const HeartButton = styled.img`
  width: 15px;
  height: 13.76px;
  margin-right: 5.5px;
  -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
  filter: grayscale(100%);
`;

const HeartCount = styled.div``;

const ProductImage = styled.img`
  width: 190px;
  height: 190px;
  border: 1px solid black;
  border: none;
`;

export const NoneImage = styled.div`
  width: 190px;
  height: 190px;
  border: 1px solid black;
  border: none;
  color: white;
  background-color: black;
  font-size: 20px;
  font-family: "LightBold";
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function RecentlyViewedItems() {
  const router = useRouter();
  const [basketItems, setBasketItems] = useState([]);

  useEffect(() => {
    const Items = JSON.parse(localStorage.getItem("recentlybasket")) || [];
    setBasketItems(Items);
    console.log("Items", Items);
  }, []);

  function onClickMoveToProduct(event) {
    router.push(`/market/product-detail/${event.currentTarget.id}`);
  }

  return (
    <Wrapper>
      {basketItems?.map((el: any) => (
        <InnerWrapper key={el._id} id={el._id} onClick={onClickMoveToProduct}>
          {/* <HeartInfo>
            <HeartButton src="/images/heart.png" />
            <HeartCount>{el.pickedCount}</HeartCount>
          </HeartInfo> */}
          {el?.images[0] ? (
            <ProductImage
              src={`https://storage.googleapis.com/${el?.images[0]}`}
            />
          ) : (
            <NoneImage>NO IMAGE</NoneImage>
          )}
        </InnerWrapper>
      ))}
    </Wrapper>
  );
}

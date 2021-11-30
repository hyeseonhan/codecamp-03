import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const InnerWrapper = styled.div`
  padding: 10px;
  width: 156px;
  height: 199px;
  /* border: 1px solid #bdbdbd; */
  border: 3px solid black;
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
  width: 60px;
  height: 60px;
  border: 1px solid #bdbdbd;
  margin-bottom: 12px;
  margin-left: 36px;
`;

export const NoneImage = styled.div`
  margin-bottom: 12px;
  margin-left: 36px;
  width: 60px;
  height: 60px;
  border: 1px solid black;
  border: none;
  /* box-shadow: 1px 1px 1px 1px; */
  margin-right: 40px;
  color: white;
  background-color: black;
  font-size: 10px;
  font-family: "LightBold";
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Detail = styled.div``;

const Name = styled.div`
  font-weight: 500;
  font-style: normal;
  font-size: 12px;
  line-height: 17.76px;
`;

const Remarks = styled.div`
  font-weight: 400;
  font-style: normal;
  font-size: 12px;
  line-height: 17.76px;
  margin-bottom: 4px;
`;

const Price = styled.div`
  font-weight: 700;
  font-style: normal;
  font-size: 16px;
  line-height: 23.6px;
  margin-bottom: 8px;
`;

const Tags = styled.div`
  font-weight: 500;
  font-style: normal;
  font-size: 10px;
  line-height: 14.8px;
  color: #bdbdbd;
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
          <HeartInfo>
            <HeartButton src="/images/heart.png" />
            <HeartCount>{el.pickedCount}</HeartCount>
          </HeartInfo>
          {el?.images[0] ? (
            <ProductImage
              src={`https://storage.googleapis.com/${el?.images[0]}`}
            />
          ) : (
            <NoneImage>NO IMAGE</NoneImage>
          )}
          <Detail>
            <Name>{el.name}</Name>
            <Remarks>{el.remarks}</Remarks>
            <Price>{el.price}</Price>
            <Tags>{el.tags}</Tags>
          </Detail>
        </InnerWrapper>
      ))}
    </Wrapper>
  );
}

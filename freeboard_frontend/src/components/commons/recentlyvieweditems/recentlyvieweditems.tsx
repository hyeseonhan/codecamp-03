import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

// export const Asd = styled.div`
//   border: 1px solid black;
//   height: 1700px;
//   width: 200px;
//   position: sticky;
// `;

export const Wrapper = styled.div`
  width: 196px;
  height: 725px;
  border: 3px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 110px;
`;

export const Title = styled.div`
  font-weight: 700;
  font-style: normal;
  font-size: 18px;
  line-height: 26.64px;
  padding-top: 20px;
  padding-bottom: 20px;
`;

const InnerWrapper = styled.div`
  /* display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; */
  padding: 10px;
  width: 156px;
  height: 199px;
  /* border: 1px solid #bdbdbd; */
  border: 3px solid black;
  margin-bottom: 20px;
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

export default function RecentlyViewedItems(props) {
  const router = useRouter();
  const [basketItems, setBasketItems] = useState([]);

  useEffect(() => {
    const Items = JSON.parse(localStorage.getItem("baskets")) || [];
    setBasketItems(Items);
    console.log("Items", Items);
  }, []);

  function onClickMoveToProduct(event) {
    router.push(`/market/product-detail/${event.currentTarget.id}`);
  }

  return (
    // <Asd>
    <Wrapper>
      <Title>최근 본 상품</Title>
      {/* basketItems ? 물음표 꼭 써줘야한다. */}
      {basketItems?.map((el: any) => (
        <InnerWrapper key={el._id} id={el._id} onClick={onClickMoveToProduct}>
          {/* <HeartWrapper> */}
          <HeartInfo>
            <HeartButton src="/images/heart.png" />
            <HeartCount>{el.pickedCount}</HeartCount>
          </HeartInfo>
          {/* </HeartWrapper> */}
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
    // </Asd>
  );
}

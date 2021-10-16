import { gql, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import { useEffect } from "react";
import { useState } from "react";

// const FETCH_USED_ITEMS = gql`
//   query fetchUseditems($isSoldout: Boolean, $search: String, $page: Int) {
//     fetchUseditems(isSoldout: $isSoldout, search: $search, page: $page) {
//       _id
//       pickedCount
//       images
//       name
//       remarks
//       price
//       tags
//     }
//   }
// `;

const Wrapper = styled.div``;

const HeartInfo = styled.div``;

const HeartButton = styled.button``;

const HeartCount = styled.div``;

const ProductImage = styled.div``;

const Detail = styled.div``;

const Name = styled.div``;

const Remarks = styled.div``;

const Price = styled.div``;

const Tags = styled.div``;

export default function ViewedInput() {
  //   const { data } = useQuery(FETCH_USED_ITEMS);
  const [basketItems, setBasketItems] = useState([]);
  useEffect(() => {
    const Items = JSON.parse(localStorage.getItem("baskets")) || [];
    setBasketItems(Items);
  }, []);

  return (
    <>
      {basketItems.map((el: any) => (
        <Wrapper key={el._id}>
          <HeartInfo>
            <HeartButton src="/images/heart.png" />
            <HeartCount>{el.pickedCount}</HeartCount>
          </HeartInfo>
          <ProductImage />
          <Detail>
            <Name>{el.name}</Name>
            <Remarks>{el.remarks}</Remarks>
            <Price>{el.price}</Price>
            <Tags>{el.tags}</Tags>
          </Detail>
        </Wrapper>
      ))}
    </>
  );
}

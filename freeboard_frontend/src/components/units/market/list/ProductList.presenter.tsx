import {
  Wrapper,
  LeftWrapper,
  BestTitle,
  TableTop,
  OnSale,
  Sold,
  Table,
  ProductImage,
  Info,
  Detail,
  PriceInfo,
  PriceIcon,
  Price,
  Name,
  Remarks,
  Tags,
  SellerInfo,
  AvatarInfo,
  Avatar,
  Seller,
  HeartInfo,
  HeartButton,
  HeartCount,
  PostButton,
} from "./ProductList.styles";
import ViewedProduct from "../viewed/ProductViewed.container";
import Flickity from "flickity";

// function Carousel() {
//   return (
//     <Flickity>s
//       <img src="/images/beerbongs.png" />
//       <img src="/images/congra.png" />
//       <img src="/images/bleeding.png" />
//     </Flickity>
//   );
// }

export default function ProductListtUI(props) {
  return (
    <Wrapper>
      <LeftWrapper>
        <BestTitle>BEST PRODUCT</BestTitle>
        <TableTop>
          <OnSale>판매중상품</OnSale>
          <Sold>판매된상품</Sold>
        </TableTop>
        {props.data?.fetchUseditems.map((el) => (
          <Table key={el._id}>
            <ProductImage />
            <Info>
              <Detail>
                <Name>{el.name}</Name>
                <Remarks>{el.remarks}</Remarks>
                <Tags>{el.tags}</Tags>
                <SellerInfo>
                  <AvatarInfo>
                    <Avatar src="/images/avatar.png" />
                    <Seller>{el.seller.name}</Seller>
                  </AvatarInfo>
                  <HeartInfo>
                    <HeartButton src="/images/heart.png" />
                    <HeartCount>{el.pickedCount}</HeartCount>
                  </HeartInfo>
                </SellerInfo>
              </Detail>
              <PriceInfo>
                <PriceIcon src="/images/price.png" />
                <Price>{el.price}</Price>
              </PriceInfo>
            </Info>
          </Table>
        ))}
        <PostButton
          id={"/market/product-post"}
          onClick={props.onClickMoveToPost}
        >
          상품 등록하기
        </PostButton>
      </LeftWrapper>
      <ViewedProduct />
    </Wrapper>
  );
}

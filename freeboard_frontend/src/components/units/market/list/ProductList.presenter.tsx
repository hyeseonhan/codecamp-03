import {
  Wrapper,
  ListWrapper,
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
import RecentlyViewedItems from "../../../commons/recentlyvieweditems/recentlyvieweditems";

export default function ProductListtUI(props) {
  return (
    <Wrapper>
      <BestTitle>BEST PRODUCT</BestTitle>
      <ListWrapper>
        <LeftWrapper>
          <TableTop>
            <OnSale>판매중상품</OnSale>
            <Sold>판매된상품</Sold>
          </TableTop>
          {props.data?.fetchUseditems.map((el) => (
            <Table
              key={el._id}
              id={el._id}
              onClick={props.onClickMoveToProductDetail(el)}
            >
              {/* {props.data?.fetchUseditems.images
                ?.filter((el: string) => el)
                .map((el: string) => (
                  <ProductImage
                    key={el}
                    src={`https://storage.googleapis.com/${el}`}
                  />
                ))} */}
              <ProductImage />
              <Info>
                <Detail>
                  <Name>{el.name}</Name>
                  <Remarks>{el.remarks}</Remarks>
                  <Tags>{el.tags}</Tags>
                  <SellerInfo>
                    <AvatarInfo>
                      <Avatar src="/images/avatar.png" />
                      <Seller>{el.seller?.name}</Seller>
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
            // id={"/market/product-post"}
            onClick={props.onClickMoveToPost}
          >
            상품 등록하기
          </PostButton>
        </LeftWrapper>
        <RecentlyViewedItems />
      </ListWrapper>
    </Wrapper>
  );
}

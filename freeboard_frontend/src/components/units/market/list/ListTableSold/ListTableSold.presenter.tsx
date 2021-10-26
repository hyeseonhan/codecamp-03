import {
  TableSold,
  ProductImage,
  NoneImage,
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
  AvatarNone,
  Seller,
  HeartInfo,
  HeartButton,
  HeartCount,
} from "./ListTableSold.style";
import InfiniteScroll from "react-infinite-scroller";

export default function ListTableSoldUI(props) {
  return (
    <div style={{ overflow: "auto", width: "1000px", height: "1004px" }}>
      <InfiniteScroll
        pageStart={0}
        loadMore={props.onloadMore}
        hasMore={true}
        useWindow={false}
        // style={{ height: "800px" }}
      >
        {props.data?.fetchUseditems.map((el) => (
          <>
            <TableSold
              key={el._id}
              id={el._id}
              onClick={props.onClickMoveToProductDetail(el)}
            >
              {el?.images[0] ? (
                <ProductImage
                  src={`https://storage.googleapis.com/${el?.images[0]}`}
                />
              ) : (
                <NoneImage>NO IMAGE</NoneImage> //src="/images/pm-logo.png"
              )}
              <Info>
                <Detail>
                  <Name>{el.name}</Name>
                  <Remarks>{el.remarks}</Remarks>
                  <Tags>{el.tags}</Tags>
                  <SellerInfo>
                    <AvatarInfo>
                      {el.seller?.picture ? (
                        <Avatar
                          src={`https://storage.googleapis.com/${el.seller?.picture}`}
                        />
                      ) : (
                        <AvatarNone />
                      )}
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
            </TableSold>
          </>
        ))}
      </InfiniteScroll>
    </div>
  );
}

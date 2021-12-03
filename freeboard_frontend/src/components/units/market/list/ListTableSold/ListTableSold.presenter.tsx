import {
  TableSold,
  ProductImage,
  NoneImage,
  Info,
  Detail,
  PriceInfo,
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

export default function ListTableSoldUI(props) {
  return (
    <>
      {props.data?.fetchUseditems.map((el) => (
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
            <NoneImage>NO IMAGE</NoneImage>
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
                  <HeartButton src="/images/bheart.png" />
                  <HeartCount>{el.pickedCount}</HeartCount>
                </HeartInfo>
              </SellerInfo>
            </Detail>
            <PriceInfo>
              <Price>
                {el.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} 원
              </Price>
            </PriceInfo>
          </Info>
        </TableSold>
      ))}
    </>
  );
}

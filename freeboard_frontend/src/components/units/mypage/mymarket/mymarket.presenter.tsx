import Searchbar02 from "../../../commons/searchbars/02/Searchbar02.container";
import {
  Wrapper,
  LeftWrapper,
  Title,
  InnerLeftWrapper,
  CategoryWrapper,
  StateMyItem,
  State,
  StatePickedItem,
  ItemContent,
  PickedContent,
  RowCategory,
  ColumnIndex,
  ColumnName,
  ColumnSold,
  ColumnNone,
  ColumnPrice,
  ColumnSeller,
  CloumnDate,
  Row,
} from "./mymarket.styles";

export default function MyMarketUI(props) {
  return (
    <Wrapper>
      <LeftWrapper>
        <Title>MARKET</Title>
        <InnerLeftWrapper>
          <CategoryWrapper>
            <StateMyItem
              onClick={props.onClickMyItem}
              isVisible={props.isVisible}
            >
              MY ITEM
            </StateMyItem>
            <State>|</State>
            <StatePickedItem
              onClick={props.onClickPickedItem}
              isVisible={props.isVisible}
            >
              PICKED ITEM
            </StatePickedItem>
          </CategoryWrapper>
          <Searchbar02 />
        </InnerLeftWrapper>
        {!props.isVisible ? (
          <ItemContent>
            <RowCategory>
              <ColumnIndex>번호</ColumnIndex>
              <ColumnName>상품명</ColumnName>
              <ColumnNone />
              <ColumnPrice>판매가격</ColumnPrice>
              <CloumnDate>날짜</CloumnDate>
            </RowCategory>
            {props.data?.fetchUseditemsISold.map((el, index) => (
              <Row key={el._id}>
                <ColumnIndex>{10 - index}</ColumnIndex>
                <ColumnName>{el.name}</ColumnName>
                {el.buyer?.name ? (
                  <ColumnSold>{el.buyer?.name && "SOLD OUT"}</ColumnSold>
                ) : (
                  <ColumnNone />
                )}
                <ColumnPrice>
                  {el.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} 원
                </ColumnPrice>
                <CloumnDate>{el.createdAt.slice(0, 10)}</CloumnDate>
              </Row>
            ))}
          </ItemContent>
        ) : (
          <PickedContent>
            <RowCategory>
              <ColumnIndex>번호</ColumnIndex>
              <ColumnName>상품명</ColumnName>
              <ColumnNone />
              <ColumnPrice>판매가격</ColumnPrice>
              <ColumnSeller>판매자</ColumnSeller>
              <CloumnDate>날짜</CloumnDate>
            </RowCategory>
            {props.Ipickedata?.fetchUseditemsIPicked.map((el, index) => (
              <Row key={el._id}>
                <ColumnIndex>{10 - index}</ColumnIndex>
                <ColumnName>{el.name}</ColumnName>
                {el.buyer?.name ? (
                  <ColumnSold>{el.buyer?.name && "SOLD OUT"}</ColumnSold>
                ) : (
                  <ColumnNone />
                )}
                <ColumnPrice>{el.price}</ColumnPrice>
                <ColumnSeller>{el.seller?.name}</ColumnSeller>
                <CloumnDate>{el.createdAt.slice(0, 10)}</CloumnDate>
              </Row>
            ))}
          </PickedContent>
        )}
      </LeftWrapper>
    </Wrapper>
  );
}

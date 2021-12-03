import {
  Wrapper,
  ListWrapper,
  LeftWrapper,
  BestTitle,
  TableTop,
  Category,
  OnSale,
  Sold,
  TableSell,
  ProductImage,
  NoneImage,
  PostButton,
  Wrap,
} from "./ProductList.styles";
import InfiniteScroll from "react-infinite-scroller";
import TableSold from "./ListTableSold/ListTableSold.container";

export default function ProductListtUI(props) {
  return (
    <Wrapper>
      <BestTitle>SECONDHAND-GOODS</BestTitle>
      <ListWrapper>
        <LeftWrapper>
          <TableTop>
            <Category>
              <OnSale
                onClick={props.onClickTablesell}
                isVisible={props.isVisible}
              >
                FOR SALE
              </OnSale>
              <Sold
                onClick={props.onClickTablesold}
                isVisible={props.isVisible}
              >
                SOLD OUT
              </Sold>
            </Category>
            <PostButton
              // id={"/market/product-post"}
              onClick={props.onClickMoveToPost}
            >
              POST
            </PostButton>
          </TableTop>
          <div
            style={{
              overflow: "auto",
              // width: "900px",
              height: "600px",
              // borderTop: "3px solid black",
              // borderBottom: "3px solid black",
            }}
          >
            <InfiniteScroll
              pageStart={0}
              loadMore={props.onloadMore}
              hasMore={true}
              useWindow={false}
            >
              <Wrap>
                {props.data?.fetchUseditems.map((el) => (
                  <>
                    {!props.isVisible ? (
                      <TableSell
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
                      </TableSell>
                    ) : (
                      <TableSold />
                    )}
                  </>
                ))}
              </Wrap>
            </InfiniteScroll>
          </div>
        </LeftWrapper>
      </ListWrapper>
    </Wrapper>
  );
}

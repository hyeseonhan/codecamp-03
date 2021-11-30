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
// import RecentlyViewedItems from "../../../commons/recentlyvieweditems/recentlyvieweditems";
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
                판매중상품
              </OnSale>
              <Sold
                onClick={props.onClickTablesold}
                isVisible={props.isVisible}
              >
                판매된상품
              </Sold>
            </Category>
            <PostButton
              // id={"/market/product-post"}
              onClick={props.onClickMoveToPost}
            >
              상품 등록하기
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
          {/* <PostButton
            // id={"/market/product-post"}
            onClick={props.onClickMoveToPost}
          >
            상품 등록하기
          </PostButton> */}
        </LeftWrapper>
        {/* <RecentlyViewedItems /> */}
      </ListWrapper>
    </Wrapper>
  );
}

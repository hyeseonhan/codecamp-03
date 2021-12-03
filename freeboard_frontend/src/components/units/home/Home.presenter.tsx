import Dompurify from "dompurify";
import Flickity01 from "../../commons/carousel/Flickity01";
import {
  Wrapper,
  LeftWarpper,
  RightWrapper,
  InnerWrapper,
  InnerWrapper1,
  Name,
  Name1,
  ProductName,
  Name2,
  Title,
  Like,
  LikeImage,
  LikeCount,
} from "./Home.styels";

export default function HomeUI(props: any) {
  return (
    <Wrapper>
      <LeftWarpper>
        <Title>TOP LIKE OF BOARDS</Title>
        {props.dataBoardsOfTheBest?.fetchBoardsOfTheBest.map((el: any) => (
          <InnerWrapper
            key={el._id}
            id={el._id}
            onClick={props.onClickMoveToBoardDetail(el)}
          >
            <Name>{el.title}</Name>
            <Name1>{el.writer}</Name1>
            <Name1>{el.contents}</Name1>
            <Like>
              <LikeImage src="/images/thumb.png" />
              <LikeCount>{el.likeCount}</LikeCount>
            </Like>
          </InnerWrapper>
        ))}
      </LeftWarpper>
      <Flickity01 />
      <RightWrapper>
        <Title>TOP PICKED PRODUCTS</Title>
        {props.dataMarketsOfTheBest?.fetchUseditemsOfTheBest?.map((el: any) => (
          <InnerWrapper1
            key={el._id}
            id={el._id}
            onClick={props.onClickMoveToProductDetail(el)}
          >
            <ProductName>{el.name}</ProductName>
            {process.browser && (
              <Name2
                dangerouslySetInnerHTML={{
                  __html: Dompurify.sanitize(el.contents),
                }}
              />
            )}
            <Name2>
              {el.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} 원
            </Name2>
          </InnerWrapper1>
        ))}
      </RightWrapper>
    </Wrapper>
  );
}

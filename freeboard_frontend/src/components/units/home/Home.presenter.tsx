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
  Title,
} from "./Home.styels";

export default function HomeUI(props) {
  return (
    <Wrapper>
      <LeftWarpper>
        <Title>BOARDS</Title>
        {props.dataBoardsOfTheBest?.fetchBoardsOfTheBest.map((el: any) => (
          <InnerWrapper
            key={el._id}
            id={el._id}
            onClick={props.onClickMoveToBoardDetail(el)}
          >
            <Name>{el.title}</Name>
            <Name1>{el.writer}</Name1>
            <Name1>{el.contents}</Name1>
          </InnerWrapper>
        ))}
      </LeftWarpper>
      <Flickity01
        dataBoardsOfTheBest={props.dataBoardsOfTheBest}
        dataMarketsOfTheBest={props.dataMarketsOfTheBest}
      />
      <RightWrapper>
        <Title>PRODUCTS</Title>
        {props.dataMarketsOfTheBest?.fetchUseditemsOfTheBest?.map((el: any) => (
          <InnerWrapper1
            key={el._id}
            id={el._id}
            onClick={props.onClickMoveToProductDetail(el)}
          >
            <Name>{el.name}</Name>
            {process.browser && (
              <Name1
                dangerouslySetInnerHTML={{
                  __html: Dompurify.sanitize(el.contents),
                }}
              />
            )}
            {/* <div>{el.tags}</div> */}
            <Name1>
              {el.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} 원
            </Name1>
          </InnerWrapper1>
        ))}
      </RightWrapper>
    </Wrapper>
  );
}

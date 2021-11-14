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
        {props.Boardsdata?.fetchBoards.map((el: any) => (
          <InnerWrapper
            key={el._id}
            id={el._id}
            onClick={props.onClickMoveToBoardDetail(el)}
          >
            <Name>{el.title}</Name>
            <Name1>{el.writer}</Name1>
            {/* <div>{el.createdAt.slice(0, 10)}</div> */}
          </InnerWrapper>
        ))}
      </LeftWarpper>
      <Flickity01 />
      <RightWrapper>
        <Title>PRODUCTS</Title>
        {props.Itemsdata?.fetchUseditems?.map((el: any) => (
          <InnerWrapper1
            key={el._id}
            id={el._id}
            onClick={props.onClickMoveToProductDetail(el)}
          >
            <Name>{el.name}</Name>
            {/* <div>{el.remarks}</div> */}
            {/* <div>{el.tags}</div> */}
            <Name1>₩{el.price}</Name1>
          </InnerWrapper1>
        ))}
      </RightWrapper>
    </Wrapper>
  );
}

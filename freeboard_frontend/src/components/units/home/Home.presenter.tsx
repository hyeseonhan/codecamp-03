import Flickity01 from "../../commons/carousel/Flickity01";
import { Wrapper, LeftWarpper, RightWrapper, Name, Title } from "./Home.styels";

export default function HomeUI(props) {
  return (
    <Wrapper>
      <LeftWarpper>
        <Title>BOARDS</Title>
        {props.Boardsdata?.fetchBoards.map((el) => (
          <>
            <Name>{el.title}</Name>
            <div>{el.writer}</div>
            {/* <div>{el.createdAt.slice(0, 10)}</div> */}
          </>
        ))}
      </LeftWarpper>
      <Flickity01 />
      <RightWrapper>
        <Title>PRODUCTS</Title>
        {props.Itemsdata?.fetchUseditems.map((el) => (
          <>
            <Name>{el.name}</Name>
            {/* <div>{el.remarks}</div> */}
            <div>{el.tags}</div>
            <div>{el.price}</div>
          </>
        ))}
      </RightWrapper>
    </Wrapper>
  );
}

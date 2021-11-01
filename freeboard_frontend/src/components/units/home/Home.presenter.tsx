import Flickity01 from "../../commons/carousel/Flickity01";
import { Wrapper, LeftWarpper, RightWrapper, Name } from "./Home.styels";

export default function HomeUI(props) {
  return (
    <Wrapper>
      <LeftWarpper>
        {props.Boardsdata?.fetchBoards.map((el) => (
          <>
            <Name>{el.title}</Name>
            {/* <div>{el.remarks}</div> */}
            <div>{el.writer}</div>
            {/* <div>{el.createdAt.slice(0, 10)}</div> */}
          </>
        ))}
      </LeftWarpper>
      <Flickity01 />
      <RightWrapper>
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

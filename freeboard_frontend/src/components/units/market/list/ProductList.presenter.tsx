import { Wrapper, BestWrapper, PostButton } from "./ProductList.styles";
import Flickity from "flickity";

// function Carousel() {
//   return (
//     <Flickity>
//       <img src="/images/beerbongs.png" />
//       <img src="/images/congra.png" />
//       <img src="/images/bleeding.png" />
//     </Flickity>
//   );
// }

export default function ProductListtUI(props) {
  return (
    <Wrapper>
      <BestWrapper>BEST PRODUCT</BestWrapper>

      <PostButton id={"/market/product-post"} onClick={props.onClickMoveToPost}>
        상품 등록하기
      </PostButton>
    </Wrapper>
  );
}

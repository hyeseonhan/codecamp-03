import Button01 from "../../../commons/buttons/01/Button01";
import Button02 from "../../../commons/buttons/02/Button02";
import {
  Wrapper,
  SellerWrapper,
  Remarks,
  ContentsWrapper,
  Price,
  Tags,
} from "./ProductDetail.styles";

export default function ProductDetailUI() {
  return (
    <Wrapper>
      <SellerWrapper></SellerWrapper>
      <Remarks></Remarks>
      <ContentsWrapper>
        <Price></Price>
      </ContentsWrapper>
      <ContentsWrapper></ContentsWrapper>
      <Tags></Tags>
      <Button01 />
      <Button02 />
    </Wrapper>
  );
}

import { RightWrapper, Title, ViewedCard } from "./ProductViewed.styles";
import ViewedInput from "../../../commons/inputs/viewedinput/viewedinput";

export default function ViewedProductUI() {
  return (
    <Wrapper>
      <Title>오늘 본 상품</Title>
      <ViewedCard>
        <ViewedInput />
      </ViewedCard>
    </Wrapper>
  );
}

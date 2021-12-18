import { Wrapper, CategoryBtn, Home, Fake } from "./LayoutHeader.styles";

export default function LayoutHeaderUI(props) {
  return (
    <Wrapper>
      <CategoryBtn src="/images/categorybtn.png"></CategoryBtn>
      <Home onClick={props.onClickMoveMain} src="/images/pm-logo.png" />
      <Fake />
    </Wrapper>
  );
}

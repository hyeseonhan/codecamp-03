import { Wrapper, Home } from "./LayoutHeader.styles";

export default function LayoutHeaderUI(props) {
  return (
    <Wrapper>
      <Home onClick={props.onClickMoveMain} src="/images/pm-logo.png" />
    </Wrapper>
  );
}

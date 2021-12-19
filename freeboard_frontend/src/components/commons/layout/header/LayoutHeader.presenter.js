import {
  Wrapper,
  CategoryBtn,
  Category,
  CloseBtn,
  CateNameWrapper,
  CateName,
  Home,
  Fake,
} from "./LayoutHeader.styles";

export default function LayoutHeaderUI(props) {
  return (
    <Wrapper>
      <CategoryBtn
        isOpen={props.isOpen}
        onClick={props.onClickOpen}
        src="/images/categorybtn.png"
      />
      <Category isOpen={props.isOpen}>
        <CloseBtn
          isOpen={props.isOpen}
          onClick={props.onClickOpen}
          src="/images/closebtn.png"
        />
        <CateNameWrapper>
          <CateName>BOARD</CateName>
          <CateName>MERCH</CateName>
          <CateName>YOUTUBE</CateName>
          <CateName>LOGIN</CateName>
        </CateNameWrapper>
      </Category>
      <Home onClick={props.onClickMoveMain} src="/images/pm-logo.png" />
      <Fake />
    </Wrapper>
  );
}

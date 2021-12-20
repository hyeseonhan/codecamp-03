import {
  Wrapper,
  CategoryBtn,
  Category,
  CategoryBack,
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
        <CategoryBack isOpen={props.isOpen}>
          <CloseBtn
            isOpen={props.isOpen}
            onClick={props.onClickOpen}
            src="/images/closebtn.png"
          />
          <CateNameWrapper>
            <CateName onClick={props.onClickCatogory} id="/home">
              HOME
            </CateName>
            <CateName onClick={props.onClickCatogory} id="/boards/list">
              BOARD
            </CateName>
            <CateName onClick={props.onClickCatogory} id="/market/product-list">
              MERCH
            </CateName>
            <CateName onClick={props.onClickCatogory} id="/boards/openapi">
              YOUTUBE
            </CateName>
            {!props.accessToken && (
              <CateName onClick={props.onClickCatogory} id="/mypage/login">
                LOGIN
              </CateName>
            )}
            {props.accessToken && (
              <CateName onClick={props.onClickCatogory} id="/mypage/loginfo">
                ACC / INFO
              </CateName>
            )}
          </CateNameWrapper>
        </CategoryBack>
      </Category>
      <Home onClick={props.onClickMoveMain} src="/images/pm-logo.png" />
      <Fake />
    </Wrapper>
  );
}

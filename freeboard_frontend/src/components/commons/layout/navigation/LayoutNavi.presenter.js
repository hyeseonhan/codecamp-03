import { Wrapper, MenuItem, MenuHome, MenuSome } from "./LayoutNavi.styles";

export default function LayoutNaviUI(props) {
  return (
    <Wrapper>
      <MenuSome id="/boards/openapi" onClick={props.onClickMenu}>
        SOME
      </MenuSome>
      {/* <MenuItem id="/boards/board-post" onClick={props.onClickMenu}>
        BOARD
      </MenuItem> */}
      <MenuItem id="/boards/list" onClick={props.onClickMenu}>
        BOARD
      </MenuItem>
      <MenuHome id="/home" onClick={props.onClickMenu}>
        HOME
      </MenuHome>
      <MenuItem id="/market/product-list" onClick={props.onClickMenu}>
        MERCH
      </MenuItem>
      {!props.accessToken && (
        <MenuItem onClick={props.onClickLogin}>LOGIN</MenuItem>
      )}
      {props.accessToken && (
        <MenuItem onClick={props.onClickLogin}>ACC / INFO</MenuItem>
      )}
    </Wrapper>
  );
}

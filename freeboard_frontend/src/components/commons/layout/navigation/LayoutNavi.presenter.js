import { Wrapper, MenuItem } from "./LayoutNavi.styles";

export default function LayoutNaviUI(props) {
  return (
    <Wrapper>
      <MenuItem id="/boards/openapi" onClick={props.onClickMenu}>
        SOME
      </MenuItem>
      {/* <MenuItem id="/boards/board-post" onClick={props.onClickMenu}>
        BOARD
      </MenuItem> */}
      <MenuItem id="/boards/list" onClick={props.onClickMenu}>
        LIST
      </MenuItem>
      <MenuItem id="/market/product-list" onClick={props.onClickMenu}>
        MERCH
      </MenuItem>
      {/* <MenuItem>MINE</MenuItem> */}

      {!props.accessToken && (
        <MenuItem onClick={props.onClickLogin}>LOGIN</MenuItem>
      )}
      {props.accessToken && (
        <MenuItem onClick={props.onClickLogin}>ACCOUNT / INFO</MenuItem>
      )}
    </Wrapper>
  );
}

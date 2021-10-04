import { Wrapper, MenuItem } from "./LayoutNavi.styles";

export default function LayoutNaviUI(props) {
  return (
    <Wrapper>
      <MenuItem id="/boards/openapi" onClick={props.onClickMenu}>
        SOME
      </MenuItem>
      <MenuItem id="/boards/board-post" onClick={props.onClickMenu}>
        BOARD
      </MenuItem>
      <MenuItem id="/boards/list" onClick={props.onClickMenu}>
        LIST
      </MenuItem>
      <MenuItem>MERCH</MenuItem>
      <MenuItem>MINE</MenuItem>
      <MenuItem id="/boards/login" onClick={props.onClickMenu}>
        LOGIN
      </MenuItem>
    </Wrapper>
  );
}

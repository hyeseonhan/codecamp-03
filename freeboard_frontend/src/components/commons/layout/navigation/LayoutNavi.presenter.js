import { Wrapper, MenuItem } from "./LayoutNavi.styles";

export default function LayoutNaviUI(props) {
  return (
    <Wrapper>
      <MenuItem>SOME</MenuItem>
      <MenuItem id="/boards/board-post" onClick={props.onClickMenu}>
        BOARD
      </MenuItem>
      <MenuItem id="/boards/list" onClick={props.onClickMenu}>
        LIST
      </MenuItem>
      <MenuItem>MERCH</MenuItem>
      <MenuItem>MINE</MenuItem>
    </Wrapper>
  );
}

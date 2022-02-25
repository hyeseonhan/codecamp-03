import { MouseEvent, SyntheticEvent } from "react";

export interface IBoardDetailUIProps {
  data?: any;
  onClickLike: (event: any) => void;
  onClickDislike: (event: any) => void;
  onClickMoveToList: () => void;
  onClickMoveToEdit: () => void;
  onClickDelete: () => void;
}

export interface IBoardDetailEmotion {
  color?: boolean;
}

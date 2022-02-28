import { MouseEvent } from "react";
import { IQuery } from "../../../../../commons/types/generated.types";

export interface IBoardCommentListProps {
  data?: Pick<IQuery, "fetchBoardComments">;
  isActive: boolean;
}

export interface IBoardCommentListUIProps {
  data?: any;
  isActive: boolean;
  onClickActive: (event: MouseEvent<HTMLElement>) => void;
}

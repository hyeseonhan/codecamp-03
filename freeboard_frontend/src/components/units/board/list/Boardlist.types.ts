import { IQuery } from "../../../../commons/types/generated.types";
import { MouseEvent } from "react";

export interface IBoardListUIProps {
  data: Pick<IQuery, "fetchBoards">;
  refetch: any;
  onChangeKeyword: (value: string) => void;
  onClickMoveToBoardDetail: (event: MouseEvent<HTMLDivElement>) => void;
  onClickMoveToBoard: () => void;
  keyword: string;
  onClickPrevPage: () => void;
  onClickNextPage: () => void;
  startPage: number;
  lastPage: number;
  onClickPage: (event: MouseEvent<HTMLElement>) => void;
  current: any;
}

export interface IBoardListEmotion {
  isMatched?: boolean;
  current?: boolean;
}

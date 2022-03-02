import {
  IQuery,
  IUseditemQuestion,
} from "../../../../../commons/types/generated.types";

export interface IProdectCommentlistUIProps {
  data?: Pick<IQuery, "fetchUseditemQuestions">;
  setIsReplySeller?: boolean;
  isReplySeller?: boolean;
  setIsCommentSeller?: boolean;
  isCommentSeller?: boolean;
}

export interface IProdectCommentlistUIItemProps {
  setIsCommentSeller?: boolean;
  setIsReplySeller?: boolean;
  el: IUseditemQuestion;
}

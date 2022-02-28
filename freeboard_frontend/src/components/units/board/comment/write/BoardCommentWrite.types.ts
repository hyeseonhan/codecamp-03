import { IBoardComment } from "../../../../../commons/types/generated.types";
import { ChangeEvent, Dispatch, SetStateAction } from "react";

export interface IBoardCommentWriteProps {
  isEdit?: boolean;
  el?: IBoardComment;
  isActive: boolean;
  setIsActive?: Dispatch<SetStateAction<boolean>>;
}

export interface IBoardCommentWriteUIProps {
  isEdit?: boolean;
  isActive: boolean;
  id: any;
  el?: IBoardComment;
  onChangeWriterInput: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePasswordInput: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContentInput: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onChangeStar: (value: number) => void;
  ContentInput: string;
  onClickUpdate: () => void;
  onClickPost: () => void;
}

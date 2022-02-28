import { ChangeEvent, Dispatch, MouseEvent, SetStateAction } from "react";

export interface ProductCommentWriteProps {
  isEdit?: boolean;
  el?: any;
  isCommentSeller: any;
  //   changeEidtForm: boolean;
  setIsEdit?: Dispatch<SetStateAction<boolean>>;
}

export interface ProductCommentWriteUIProps {
  isCommentSeller: any;
  changeEidtForm: boolean;
  isEdit?: boolean;
  el?: any;
  onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  contents: string;
  onClickUpdate: (event: MouseEvent<HTMLElement>) => void;
  onClickQuestion: () => void;
}

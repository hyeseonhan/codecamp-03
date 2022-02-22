import { Maybe } from "../../../../commons/types/generated.types";
import { ChangeEvent, MouseEvent } from "react";

export interface IBoardWriteProps {
  isEdit?: boolean;
  color?: boolean;
  data?: any;
}

export interface IMyBoardAddress {
  zipcode?: Maybe<string> | undefined;
  address?: Maybe<string> | undefined;
  addressDetail?: Maybe<string> | undefined;
}

export interface IUpdateBoardInput {
  title?: string;
  contents?: string;
  youtubeUrl?: string;
  boardAddress: IMyBoardAddress;
  images?: Array<string>;
}

export interface IMyVariables {
  updateBoardInput: IUpdateBoardInput;
  password: string;
  boardId: string;
}

export interface IBoardlWriteUIProps {
  isEdit?: boolean;
  isOpen: boolean;
  data?: any;
  color?: boolean;
  onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeTitle: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeAddressDetail: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeYoutubeUrl: (event: ChangeEvent<HTMLInputElement>) => void;
  writerError: string;
  passwordError: string;
  titleError: string;
  contentsError: string;
  zipcode: string;
  address: string;
  addressDetail: string;
  onTogleAddress: () => void;
  handleComplete: (data: any) => void;
  onChangeFiles: (idx: number, url: string) => void;
  onClickSubmit: () => void;
  onClickEdit: () => void;
}

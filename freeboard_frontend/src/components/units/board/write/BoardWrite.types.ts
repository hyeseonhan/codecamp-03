import { Maybe } from "../../../../commons/types/generated.types";

export interface IBoardWriteProps {
  isEdit?: boolean;
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

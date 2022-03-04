import { ChangeEvent } from "react";
import { FieldValues, UseFormHandleSubmit } from "react-hook-form";

export interface IProductPostProps {
  isEdit?: boolean;
  data?: any;
}

export interface ForeValues {
  name: string;
  remarks: string;
  contents: string;
  price: number;
  tags: any;
}

export interface IProductPostUIProps {
  [x: string]: any;
  isEdit?: boolean;
  data?: any;
  onClickUpdate: (data: ForeValues) => void;
  onClickPost: (data: ForeValues) => void;
  onChangeEditior: (value: string) => void;
  onChangeAddressDetail: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeFiles: (file: File, index: number) => void;
}

import { MutableRefObject } from "react";
import { ChangeEvent, RefObject } from "react";

export interface IOpenapiListUIprops {
  list: any;
  inputRef: MutableRefObject<HTMLInputElement>;
  onChangeSearch: (event: ChangeEvent<HTMLInputElement>) => void;
}

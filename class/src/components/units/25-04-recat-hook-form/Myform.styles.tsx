import styled from "@emotion/styled";
import { IProps } from "./Myform.types";
// 공통component가 아닌 이모션들
export const MyButton = styled.button`
  background-color: ${(props: IProps) => (props.isValid ? "yellow" : "green")};
`;

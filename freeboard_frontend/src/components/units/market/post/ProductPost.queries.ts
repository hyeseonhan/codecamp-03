import { gql } from "@apollo/client";

export const CREATE_USED_ITEM = gql`
  mutation creatUseditem($createUseditemInput: CreateUseditemInput!) {
    createUseditem(createUseditemInput: $createUseditemInput) {
      _id
    }
  }
`;

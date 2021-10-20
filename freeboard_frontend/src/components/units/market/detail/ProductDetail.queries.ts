import { gql } from "@apollo/client";

export const FETCH_USED_ITEM = gql`
  query fetchUseditem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      _id
      name
      remarks
      contents
      images
      price
      tags
      seller {
        _id
        email
        name
        picture
      }
      useditemAddress {
        _id
        zipcode
        address
        addressDetail
        lat
        lng
      }
      createdAt
      pickedCount
    }
  }
`;

export const DELETE_USED_ITEM = gql`
  mutation deleteUseditem($useditemId: ID!) {
    deleteUseditem(useditemId: $useditemId)
  }
`;

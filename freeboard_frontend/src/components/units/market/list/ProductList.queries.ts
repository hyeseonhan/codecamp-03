import { gql } from "@apollo/client";

export const FETCH_USED_ITEMS = gql`
  query fetchUseditems($isSoldout: Boolean, $search: String, $page: Int) {
    fetchUseditems(isSoldout: $isSoldout, search: $search, page: $page) {
      _id
      name
      remarks
      images
      tags
      seller {
        _id
        name
        picture
      }
      pickedCount
      price
    }
  }
`;

// export const FETCH_USED_ITEMS_I_PICKED = gql`
//   query fetchUseditemsIPicked($search: String) {
//     fetchUseditemsIPicked(search: $search) {
//       _id
//     }
//   }
// `;

export const TOGGLE_USED_ITEM_PICK = gql`
  mutation toggleUseditemPick($useditemId: ID!) {
    toggleUseditemPick(useditemId: $useditemId)
  }
`;

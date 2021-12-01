import { gql } from "@apollo/client";

export const FETCH_BOARDS_OF_THE_BEST = gql`
  query fetchBoardsOfTheBest {
    fetchBoardsOfTheBest {
      writer
      title
      contents
      images
      _id
      likeCount
      createdAt
    }
  }
`;

export const FETCH_USED_ITEMS_OF_THE_BEST = gql`
  query {
    fetchUseditemsOfTheBest {
      _id
      images
      name
      remarks
      price
      contents
      buyer {
        name
      }
      pickedCount
    }
  }
`;

import { gql } from "@apollo/client";

export const FETCH_USED_ITEM_QUESTION_ANSWERS = gql`
  query fetchUseditemQuestionAnswers($page: Int, $useditemQuestionId: ID!) {
    fetchUseditemQuestionAnswers(
      page: $page
      useditemQuestionId: $useditemQuestionId
    ) {
      _id
      contents
      user {
        _id
        name
        email
      }

      useditemQuestion {
        _id
        # user {
        #   _id
        # }
      }
    }
  }
`;

export const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
    }
  }
`;

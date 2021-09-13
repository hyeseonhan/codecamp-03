import BoardCommentUI from "./BoardComment.presenter";
import { useState } from "react";
import { useRouter } from "next/router";
import { useMutation, useQuery } from "@apollo/client";
import {
  CREATE_BOARD_COMMENT,
  FETCH_BOARD_COMMENTS,
} from "./BoardComment.queries";

export default function BoardComment() {
  const router = useRouter();

  const { data } = useQuery(FETCH_BOARD_COMMENTS, {
    variables: { boardId: router.query.board_post_detail },
  });

  const [WriterInput, setWriterInput] = useState("");
  const [PasswordInput, setPasswordInput] = useState("");
  const [ContentInput, setContentInput] = useState("");

  const [createBoardComment] = useMutation(CREATE_BOARD_COMMENT);

  function onChangeWriterInput(event) {
    setWriterInput(event.target.value);
  }

  function onChangePasswordInput(event) {
    setPasswordInput(event.target.value);
  }

  function onChangeContentInput(event) {
    setContentInput(event.target.value);
  }

  async function onClickPost() {
    try {
      await createBoardComment({
        variables: {
          boardId: router.query.board_post_detail,
          createBoardCommentInput: {
            writer: WriterInput,
            password: PasswordInput,
            contents: ContentInput,
            rating: 2,
          },
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.board_post_detail },
          },
        ],
      });
    } catch (error) {
      console.log(error);
    }
  }
  // try {
  //   await createBoardComment({
  //     variables: {
  //       createBoardCommentInput: {
  //         writer: WriterInput,
  //         password: PasswordInput,
  //         contents: ContentInput,
  //         rating: 2,
  //       },
  //     }
  //     refetchQueries:[
  //       {query: FETCH_BOARD_COMMENTS,
  //       variables:{boardId: router.query.board_comment}
  //       }
  //     ])
  //     }} catch (error)

  return (
    <BoardCommentUI
      onChangeWriterInput={onChangeWriterInput}
      onChangePasswordInput={onChangePasswordInput}
      onChangeContentInput={onChangeContentInput}
      onClickPost={onClickPost}
      data={data}
    />
  );
}

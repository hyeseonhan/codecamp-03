import BoardCommentUI from "./BoardCommentWrite.presenter";
import { useState } from "react";
import { useRouter } from "next/router";
import { useMutation, useQuery } from "@apollo/client";
import {
  CREATE_BOARD_COMMENT,
  UPDATE_BOARD_COMMENT,
} from "./BoardCommentWrite.queries";
import { FETCH_BOARD_COMMENTS } from "../list/BoardCommentList.queries";

export default function BoardCommentWrite(props) {
  const router = useRouter();

  const [WriterInput, setWriterInput] = useState("");
  const [PasswordInput, setPasswordInput] = useState("");
  const [ContentInput, setContentInput] = useState("");

  const [createBoardComment] = useMutation(CREATE_BOARD_COMMENT);

  const [updateBoardComment] = useMutation(UPDATE_BOARD_COMMENT);

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
          createBoardCommentInput: {
            writer: WriterInput,
            password: PasswordInput,
            contents: ContentInput,
            rating: 2,
          },
          boardId: String(router.query.board_post_detail),
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.board_post_detail },
          },
        ],
      });
    } catch (error) {
      alert(error.message);
    }
  }

  async function onClickUpdate(event) {
    if (!ContentInput) {
      alert("내용이 수정되지 않았습니다.");
      return;
    }
    if (!PasswordInput) {
      alert("비밀번호가 입력되지 않았습니다.");
      return;
    }

    try {
      await updateBoardComment({
        variables: {
          updatBoardCommentInput: {
            contents: ContentInput,
            rating: 2,
          },
          password: PasswordInput,
          boardCommentId: event.target.id,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.board_post_detail },
          },
        ],
      });
      props.setisEdit?.(false);
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <BoardCommentUI
      onChangeWriterInput={onChangeWriterInput}
      onChangePasswordInput={onChangePasswordInput}
      onChangeContentInput={onChangeContentInput}
      onClickPost={onClickPost}
      onClickUpdate={onClickUpdate}
      isEdit={props.isEdit}
      el={props.el}
    />
  );
}

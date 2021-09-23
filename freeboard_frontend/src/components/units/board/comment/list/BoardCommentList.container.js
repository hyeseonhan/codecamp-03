import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { useMutation } from "@apollo/client";
import BoardCommentListUI from "./BoardCommentList.presenter";
import {
  FETCH_BOARD_COMMENTS,
  DELETE_BOARD_COMMENT,
} from "./BoardCommentList.queries";
import { useState } from "react";

export default function BoardCommentList(props) {
  const router = useRouter();
  const { data, fetchMore } = useQuery(FETCH_BOARD_COMMENTS, {
    variables: { boardId: router.query.board_post_detail },
  });

  const [isActive, setIsActive] = useState("");

  function onClickActive(event) {
    setIsActive(event.target.id);
  }

  // delete
  // const [isEdit, setIsEdit] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [PasswordInput, setPasswordInput] = useState("");
  const [commentId, setCommentId] = useState("");

  const [deleteBoardComment] = useMutation(DELETE_BOARD_COMMENT);

  function onChangePasswordInput(event) {
    setPasswordInput(event.target.value);
  }

  async function onClickCommentDelete(event) {
    setModalVisible(true);
    setCommentId(event.target.id);
  }

  function closeModal() {
    setModalVisible((prev) => !prev);
  }

  async function onClickOk() {
    try {
      await deleteBoardComment({
        variables: {
          password: String(PasswordInput),
          boardCommentId: commentId,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: String(router.query.board_post_detail) },
          },
        ],
      });
      console.log(commentId);
      setModalVisible((prev) => !prev);
    } catch (error) {
      alert(error);
    }
  }

  function onLoadMore() {
    if (!data) return;
    fetchMore({
      variables: {
        page: Math.ceil(data?.fetchBoardComments.length / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        return {
          fetchBoardComments: [
            ...prev.fetchBoardComments,
            ...fetchMoreResult.fetchBoardComments,
          ],
        };
      },
    });
  }

  return (
    <BoardCommentListUI
      data={data}
      onClickActive={onClickActive}
      isActive={isActive}
      setIsActive={setIsActive}
      onClickCommentDelete={onClickCommentDelete}
      // el={props.el}
      isOpen={isOpen}
      modalVisible={modalVisible}
      onChangePasswordInput={onChangePasswordInput}
      closeModal={closeModal}
      onClickOk={onClickOk}
      onLoadMore={onLoadMore}
    />
  );
}

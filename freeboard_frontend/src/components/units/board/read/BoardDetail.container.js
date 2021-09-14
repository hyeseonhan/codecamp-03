import BoardDetailUI from "./BoardDetail.presenter";
import { useRouter } from "next/router";
import { useQuery, useMutation } from "@apollo/client";
import {
  FETCH_BOARD,
  DELETE_BOARD,
  LIKE_BOARD,
  DISLIKE_BOARD,
} from "./BoardDetail.queries";

export default function BoardDetail() {
  const router = useRouter();
  const [deleteBoard] = useMutation(DELETE_BOARD);
  const [likeBoard] = useMutation(LIKE_BOARD);
  const [dislikeBoard] = useMutation(DISLIKE_BOARD);

  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.board_post_detail },
  });

  function onClickMoveToList() {
    router.push("/boards/list");
  }

  function onClickMoveToEdit() {
    router.push(`/boards/${router.query.board_post_detail}/edit`);
  }

  async function onClickDelete() {
    try {
      await deleteBoard({
        variables: { boardId: router.query.board_post_detail },
      });
      alert("게시물이 삭제되었습니다.");
      router.push("/boards/list");
    } catch (error) {
      alert(error.message);
    }
  }

  async function onClickLike(event) {
    await likeBoard({
      variables: { boardId: event.target.id },
      refetchQueries: [
        {
          query: FETCH_BOARD,
          variables: { boardId: router.query.board_post_detail },
        },
      ],
    });
    alert("좋아요를 클릭합니다.");
  }

  async function onClickDislike(event) {
    await dislikeBoard({
      variables: { boardId: event.target.id },
      refetchQueries: [
        {
          query: FETCH_BOARD,
          variables: { boardId: router.query.board_post_detail },
        },
      ],
    });
    alert("싫어요를 클릭합니다.");
  }

  return (
    <BoardDetailUI
      data={data}
      router={router}
      onClickMoveToList={onClickMoveToList}
      onClickDelete={onClickDelete}
      onClickMoveToEdit={onClickMoveToEdit}
      onClickLike={onClickLike}
      onClickDislike={onClickDislike}
    />
  );
}

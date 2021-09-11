import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import BoardListUI from "./Boardlist.presenter";
import { FETCH_BOARDS } from "./Boardlist.queries";

export default function BoardList() {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARDS);

  function onClickMoveToBoard() {
    router.push("/boards/board-post");
  }

  function onClickMoveToBoardDetail() {
    router.push("/boards/board_post_detail");
  }

  return (
    <BoardListUI
      data={data}
      onClickMoveToBoard={onClickMoveToBoard}
      onClickMoveToBoardDetail={onClickMoveToBoardDetail}
    />
  );
}

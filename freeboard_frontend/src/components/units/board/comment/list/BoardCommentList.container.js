import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import BoardCommentListUI from "./BoardCommentList.presenter";
import { FETCH_BOARD_COMMENTS } from "./BoardCommentList.queries";
import { useState } from "react";

export default function BoardCommentList() {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARD_COMMENTS, {
    variables: { boardId: router.query.board_post_detail },
  });

  const [isActive, setIsActive] = useState("");

  function onClickActive(event) {
    setIsActive(event.target.id);
  }

  return (
    <BoardCommentListUI
      data={data}
      onClickActive={onClickActive}
      isActive={isActive}
      setIsActive={setIsActive}
    />
  );
}

import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import BoardCommentListUI from "./BoardCommentList.presenter";
import { FETCH_BOARD_COMMENTS } from "./BoardCommentList.queries";

export default function BoardCommentListPage() {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARD_COMMENTS, {
    variables: { boardId: router.query.board_post_detail },
  });

  return <BoardCommentListUI data={data} />;
}

import BoardDetail from "../../../src/components/units/board/read/BoardDetail.container";
import BoardCommentWrite from "../../../src/components/units/board/comment/write/BoardCommentWrite.container";
import BoardCommentList from "../../../src/components/units/board/comment/list/BoardCommentList.container";
import Head from "next/head";
import { gql, request } from "graphql-request";

// ssr
export default function BoardDetailPage(props: any) {
  return (
    <>
      <Head>
        <meta property="og:title" content={props.fetchBoard.name} />
        <meta property="og:description" content={props.fetchBoard.writer} />
        <meta
          property="og:image"
          content={`https://storage.googleapis.com/${props.fetchBoard.images[0]}`}
        />
      </Head>
      <BoardDetail />
      <BoardCommentWrite />
      <BoardCommentList />
    </>
  );
}

export const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      writer
      title
      images
      contents
    }
  }
`;

export const getServerSideProps = async (context: any) => {
  // 1. graphql 데이터를 요청
  const result = await request(
    "https://backend03.codebootcamp.co.kr/graphql08",
    FETCH_BOARD,
    { boardId: context.query.board_post_detail }
  );

  // 2. 요청받은 데이터를 페이지로 넘긴다.
  return {
    props: {
      fetchBoard: result.fetchBoard,
    },
  };
};

import BoardWrite from "../../../../src/components/units/board/write/BoardWrite.container";
import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      writer
      title
      contents
      youtubeUrl
      boardAddress {
        zipcode
        address
        addressDetail
      }
      images
    }
  }
`;

export default function BoardWriteEditPage() {
  const router = useRouter();

  // BoardWrite 에서 fetch를 하면 안됨: 등록하는건 fetch가 필요없어서 위에서 data를 넘겨줘야한다.
  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: String(router.query.board_post_detail) },
  });

  // console.log(data);

  return <BoardWrite isEdit={true} data={data} />;
}

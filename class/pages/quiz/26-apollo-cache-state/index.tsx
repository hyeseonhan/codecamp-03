import { gql, useQuery } from "@apollo/client";

const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      _id
      wirter
      title
      contents
    }
  }
`;

export default function QuizApolloCacheState() {
  const { data } = useQuery(FETCH_BOARDS);

  return (
    <>
      {data?.fetchBoards.map((el, index) => (
        <div key={index}>
          작성자: <span>{el.writer}</span>
          제목: <span>{el.title}</span>
          내용: <span>{el.contents}</span>
        </div>
      ))}
    </>
  );
}

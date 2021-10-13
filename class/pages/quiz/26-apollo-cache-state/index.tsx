import { gql, useMutation, useQuery } from "@apollo/client";
import { useForm } from "react-hook-form";

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

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      writer
      title
      contents
    }
  }
`;

export default function QuizApolloCacheState() {
  const { handleSubmit, register } = useForm();

  //   function onClickCreate(data) {
  //     console.log(data);
  //   }

  const { data } = useQuery(FETCH_BOARDS);
  const [createBoard] = useMutation(CREATE_BOARD);

  const onClickCreate = () => {
    createBoard({
      variables: {
        writer,
        title,
        contents,
      },
    });
  };

  return (
    <form onSubmit={handleSubmit(onClickCreate)}>
      작성자: <input type="text" {...register("writer")} />
      제목: <input type="text" {...register("title")} />
      내용: <input type="text" {...register("contents")} />
      <button type="submit">등록하기</button>
      {data?.fetchBoards.map((el, index) => (
        <div key={index}>
          작성자: <span>{el.writer}</span>
          제목: <span>{el.title}</span>
          내용: <span>{el.contents}</span>
        </div>
      ))}
    </form>
  );
}

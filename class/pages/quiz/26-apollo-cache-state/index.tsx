import { gql, useMutation, useQuery } from "@apollo/client";
import { useForm } from "react-hook-form";

const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      _id
      writer
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

const DELETE_BOARD = gql`
  mutation deleteBoard($boardId: ID!) {
    deleteBoard(boardId: $boardId)
  }
`;

export default function QuizApolloCacheState() {
  const { handleSubmit, register } = useForm();

  const { data } = useQuery(FETCH_BOARDS);
  const [createBoard] = useMutation(CREATE_BOARD);
  const [deleteBoard] = useMutation(DELETE_BOARD);

  const onClickDelete = (boardId) => async () => {
    await deleteBoard({
      variables: {
        boardId: boardId,
      },
      update(cache, { data }) {
        const deletedId = data.deldteBoard;
        cache.modify({
          fields: {
            fetchBoards: (prev, { readField }) => {
              const newFetchBoards = prev.filter(
                (el) => readField("_id", el) !== deletedId
              );
              return [...newFetchBoards];
            },
          },
        });
      },
    });
  };

  async function onClickCreate(data) {
    // try {
    await createBoard({
      variables: {
        createBoardInput: {
          writer: data.writer,
          password: data.password,
          title: data.title,
          contents: data.contents,
        },
      },
      update(cache, { data }) {
        cache.modify({
          fields: {
            fetchBoards: (prev) => {
              return [...prev, data.createBoard];
            },
          },
        });
      },
    });
    // } catch (error) {
    //   console.log(error);
    // }
  }

  return (
    <form onSubmit={handleSubmit(onClickCreate)}>
      작성자: <input type="text" {...register("writer")} />
      <br />
      비밀번호: <input type="password" {...register("password")} />
      <br />
      제목: <input type="text" {...register("title")} />
      <br />
      내용: <input type="text" {...register("contents")} />
      <br />
      <button type="submit">등록하기</button>
      {data?.fetchBoards.map((el) => (
        <div key={el._id}>
          작성자: <span>{el.writer}</span>
          제목: <span>{el.title}</span>
          내용: <span>{el.contents}</span>
          <button onClick={onClickDelete(el._id)}>X</button>
        </div>
      ))}
    </form>
  );
}

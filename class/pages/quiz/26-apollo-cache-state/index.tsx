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
    try {
      await deleteBoard({
        variables: {
          boardId: boardId,
        },
        update(cache, { data }) {
          const deletedId = data.deleteBoard;
          cache.modify({
            fields: {
              fetchBoards: (prev, { readField }) => {
                const newFetchBoards = prev.filter((el) => {
                  return readField("_id", el) !== deletedId;
                });
                return [...newFetchBoards];
              },
            },
          });
        },
      });
    } catch (err) {
      console.log(err);
    }
  };

  async function onClickCreate(data) {
    try {
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
                return [data.createBoard, ...prev];
              },
            },
          });
        },
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <form onSubmit={handleSubmit(onClickCreate)}>
      ?????????: <input type="text" {...register("writer")} />
      <br />
      ????????????: <input type="password" {...register("password")} />
      <br />
      ??????: <input type="text" {...register("title")} />
      <br />
      ??????: <input type="text" {...register("contents")} />
      <br />
      <button type="submit">????????????</button>
      {data?.fetchBoards.map((el) => (
        <div key={el._id}>
          ?????????: <span>{el.writer}</span>
          ??????: <span>{el.title}</span>
          ??????: <span>{el.contents}</span>
          <button type="button" onClick={onClickDelete(el._id)}>
            X
          </button>
        </div>
      ))}
    </form>
  );
}

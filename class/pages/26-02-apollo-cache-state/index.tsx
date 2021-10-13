import { gql, useMutation, useQuery } from "@apollo/client";
const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      writer
      title
      contents
      _id
    }
  }
`;

const DELETE_BOARD = gql`
  mutation deleteBoard($boardId: ID!) {
    deleteBoard(boardId: $boardId)
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

export default function ApolloCacheStatePage() {
  const { data } = useQuery(FETCH_BOARDS);
  const [deleteBoard] = useMutation(DELETE_BOARD);
  const [createBoard] = useMutation(CREATE_BOARD);

  const onClickDelete = (boardId) => async () => {
    // 가장 가까운 함수에 async 붙여줘야함
    // boardId
    await deleteBoard({
      variables: {
        boardId: boardId,
      },
      update(cache, { data }) {
        // update는 위에 요청이 끝나면 실행된다.
        const deletedId = data.deleteBoard;
        cache.modify({
          fields: {
            fetchBoards: (prev, { readField }) => {
              // 1. 기존의 fetchBoards 10개에서, 지금 삭제된 ID를 제외한 9개를 만들고
              // 2. 그렇게 만들어진 9개의 새로운 fetchBoards 를 return 하여, 덮어씌우기

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

  const onClickCreate = () => {
    createBoard({
      variables: {
        createBoardInput: {
          writer: "테스트",
          password: "123",
          title: "테스트제목",
          contents: "테스트내용",
        },
      },
      update(cache, { data }) {
        cache.modify({
          fields: {
            fetchBoards: (prev) => {
              // 추가된 createBoard 결과물과 이전의 10개를 합쳐서 11개를 돌려주기
              return [data.createBoard, ...prev]; // data.createBoard 를 뒤에 넣으다면 뒤에 새로 생기게된다.
            },
          },
        });
      },
    });
  };

  return (
    <>
      {data?.fetchBoards.map((el) => (
        <div key={el._id}>
          <span>{el.writer}</span>
          <span>{el.title}</span>
          <span>{el.contents}</span>
          <button onClick={onClickDelete(el._id)}>삭제하기</button>
        </div>
      ))}
      <button onClick={onClickCreate}>등록하기</button>
    </>
  );
}

// import { gql, useMutation, useQuery } from "@apollo/client";

// const FETCH_BOARDS = gql`
//   query fetchBoards {
//     fetchBoards {
//       _id
//       writer
//       title
//       contents
//     }
//   }
// `;

// const DELETE_BOARD = gql`
//   mutation deleteBoard($boardId: ID!) {
//     deleteBoard(boardId: $boardId)
//   }
// `;

// const CREATE_BOARD = gql`
//   mutation createBoard($createBoardInput: CreateBoardInput!) {
//     createBoard(createBoardInput: $createBoardInput) {
//       _id
//       writer
//       title
//       contents
//     }
//   }
// `;

// export default function ApolloCacheStatePage() {
//   const { data } = useQuery(FETCH_BOARDS); // return에 뿌려주기 위해서
//   const [deleteBoard] = useMutation(DELETE_BOARD);
//   const [createBoard] = useMutation(CREATE_BOARD);

//   const onClickDelete = (boardId) => async () => {
//     await deleteBoard({
//       variables: {
//         boardId: boardId,
//       },
//       update(cache, { data }) {
//         const deletedId = data.dleteBoard;

//         cache.modify({
//           fields: {
//             fetchBoards: (prev, { readField }) => {
//               // 1. 기존의 fetchBoards 10개에서, 지금 삭제된 ID를 제외한 9개를 만들고
//               // 2. 그렇게 만들어진 9개의 새로운 fetchBoards를 return하여, 덮어씌우기

//               const newFetchBoards = prev.filter(
//                 (el) => readField("_id", el) !== deletedId
//               );

//               return [...newFetchBoards];
//             },
//           },
//         });
//       },
//     });
//   };

//   const onClickCreate = () => {
//     createBoard({
//       variables: {
//         createBoardInput: {
//           writer: "곽두팔",
//           password: "11",
//           title: "두팔이올시다",
//           contents: "두팔두팔",
//         },
//       },
//       update(cache, { data }) {
//         cache.modify({
//           fields: {
//             fetchBoards: (prev) => {
//               // 추가된 createBoard 결과물과 이전의 10개를 합쳐서 11개를 돌려주기
//               return [...prev, data.createBoard];
//             },
//           },
//         });
//       },
//     });
//   };

//   // gql로 만든 FETCH_BOARDS 를 뿌려준다.
//   return (
//     <>
//       {data?.fetchBoards.map((el, index) => (
//         <div key={index}>
//           <span>{el.writer}</span>
//           <span>{el.title}</span>
//           <span>{el.contents}</span>
//           <button onClick={onClickDelete(el._id)}>삭제하기</button>
//         </div>
//       ))}
//       <button onClick={onClickCreate}>등록하기</button>
//     </>
//   );
// }

import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";
import { useState } from "react";
import BoardCommentWrite from "../write/BoardCommentWrite.container";
import { FETCH_BOARD_COMMENTS } from "./BoardCommentList.queries";
import { DELETE_BOARD_COMMENT } from "./BoardCommentList.queries";

import {
  Wrapper,
  CommentWrapper,
  Avatar,
  Info,
  Writer,
  Content,
  CreatedAt,
  Button,
  UpdatePencil,
  DeliteIcon,
} from "./BoardCommentList.styles";

export default function BoardCommentListPage(props) {
  const router = useRouter();
  const [isEdit, setIsEdit] = useState(false);
  const [isEditedId, setIsEditedId] = useState("");
  const [deleteBoardComment] = useMutation(DELETE_BOARD_COMMENT);

  function onClickUpdate(event) {
    setIsEdit(false);
  }

  // function onClickPost() {
  //   setIsEditedId(false);
  // }

  async function onClickDelite() {
    const PasswordInput = prompt("비밀번호를 입력해 주세요");

    try {
      await deleteBoardComment({
        variables: {
          password: PasswordInput,
          boardCommentId: props.el?._id,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.boardId },
          },
        ],
      });
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <>
      {props.data?.fetchBoardComments.map((el) => (
        <Wrapper key={el._id} el={el}>
          {!isEdit !== el._id && (
            <CommentWrapper>
              <Avatar src="/images/avatar.png" />
              <Info>
                <Writer>{el.writer}</Writer>
                <Content>{el.contents}</Content>
                <CreatedAt>{el.createdAt}</CreatedAt>
              </Info>
              <Button>
                <UpdatePencil
                  src="/images/pencil.png"
                  onClick={onClickUpdate}
                  id={el._id}
                ></UpdatePencil>
                <DeliteIcon
                  src="/images/delite.png"
                  onClick={onClickDelite}
                ></DeliteIcon>
              </Button>
            </CommentWrapper>
          )}
          {isEdit === el.id && (
            <BoardCommentWrite
              isEdit={isEdit}
              setIsEdit={setIsEdit}
              el={props.el}
              // props 가 3개 넘어간거
            />
          )}
        </Wrapper>
      ))}
    </>
  );
}

//   <Wrapper key={el._id} el={el}>
//     {isEditedId !== el.id && (
//       <CommentWrapper>
//         <Avatar src="/images/avatar.png" />
//         <Info>
//           <Writer id={el._id}>{props.el?.writer}</Writer>
//           <Content id={el._id}>{props.el?.contents}</Content>
//           <CreatedAt id={el._id}>{props.el?.createdAt}</CreatedAt>
//         </Info>
//         <Button>
//           <UpdatePencil
//             src="/images/pencil.png"
//             onClick={onClickUpdate}
//           ></UpdatePencil>
//           <DeliteIcon src="/images/delite.png"></DeliteIcon>
//         </Button>
//       </CommentWrapper>
//     )}
//       {isEditedId === el.id && (

//   <BoardCommentWrite
//     isEdit={isEdit}
//     setIsEdit={setIsEdit}
//     el={props.el}
//     // props 가 3개 넘어간거
//   />
// )}
// ))}

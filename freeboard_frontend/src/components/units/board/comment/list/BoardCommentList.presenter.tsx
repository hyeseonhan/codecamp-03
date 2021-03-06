import { useRouter } from "next/router";
import BoardCommentWrite from "../write/BoardCommentWrite.container";
import { Modal } from "antd";
import InfiniteScroll from "react-infinite-scroller";
import { IBoardCommentListUIProps } from "./BoardCommentList.types";

// import { FETCH_BOARD_COMMENTS } from "./BoardCommentList.queries";
// import { DELETE_BOARD_COMMENT } from "./BoardCommentList.queries";
// import { useMutation } from "@apollo/client";
// import { useState } from "react";
// import { Rate } from "antd";

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
  WriterWrapper,
  Star,
} from "./BoardCommentList.styles";

export default function BoardCommentListUI(props: IBoardCommentListUIProps) {
  const router = useRouter();

  // const [isEditedId, setIsEditedId] = useState("");
  // const [deleteBoardComment] = useMutation(DELETE_BOARD_COMMENT);

  // function onClickPost() {
  //   setIsEditedId(false);
  // }

  // async function onClickDelite() {
  //   const PasswordInput = prompt("비밀번호를 입력해 주세요");

  //   try {
  //     await deleteBoardComment({
  //       variables: {
  //         password: PasswordInput,
  //         boardCommentId: props.el?._id,
  //       },
  //       refetchQueries: [
  //         {
  //           query: FETCH_BOARD_COMMENTS,
  //           variables: { boardId: router.query.board_post_detail },
  //         },
  //       ],
  //     });
  //   } catch (error) {
  //     alert(error.message);
  //   }
  // }

  return (
    <>
      <Modal
        visible={props.modalVisible}
        onCancel={props.closeModal}
        onOk={props.onClickOk}
      >
        비밀번호 입력:{" "}
        <input type="password" onChange={props.onChangePasswordInput} />
      </Modal>
      <InfiniteScroll pageStart={0} loadMore={props.onLoadMore} hasMore={true}>
        {props.data?.fetchBoardComments.map((el) => (
          // 댓글 상세보기
          <Wrapper key={el._id} el={el}>
            {el._id !== props.isActive && (
              <CommentWrapper>
                <Avatar src="/images/avatar.png" />
                <Info>
                  <WriterWrapper>
                    <Writer>{el.writer}</Writer>
                    <Star value={el?.rating} disabled />
                  </WriterWrapper>
                  <Content>{el.contents}</Content>
                  <CreatedAt>{el.createdAt.slice(0, 10)}</CreatedAt>
                </Info>
                <Button>
                  <UpdatePencil
                    src="/images/pencil.png"
                    onClick={props.onClickActive}
                    id={el._id}
                  ></UpdatePencil>
                  <DeliteIcon
                    src="/images/delite.png"
                    onClick={props.onClickCommentDelete}
                    id={el._id}
                  ></DeliteIcon>
                </Button>
              </CommentWrapper>
            )}
            {/* 댓글 수정하기 */}
            {el._id === props.isActive && (
              <BoardCommentWrite
                isEdit={props.isEdit} //true 일 때 댓글 수정 보임.
                setIsEdit={props.setIsEdit}
                el={props.el} //defaultvalue 수정시 보여지는 데이터
                isActive={props.isActive}
                id={el._id}
                setIsActive={props.setIsActive}

                // props 가 3개 넘어간거
              />
            )}
          </Wrapper>
        ))}
      </InfiniteScroll>
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

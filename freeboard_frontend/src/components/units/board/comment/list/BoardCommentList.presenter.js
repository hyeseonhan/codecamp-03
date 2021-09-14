import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";
import { useState } from "react";
import BoardCommentWrite from "../write/BoardCommentWrite.container";
// import { FETCH_BOARD_COMMENTS } from "./BoardCommentList.queries";

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

export default function BoardCommentListUI(props) {
  const router = useRouter();
  const [isEdit, setIsEdit] = useState(false);

  function onClickUpdate() {
    setIsEdit(true);
  }

  return (
    <>
      {props.data?.fetchBoardComments.map((el) => (
        <Wrapper key={el._id} el={el}>
          {!isEdit && (
            <CommentWrapper>
              <Avatar src="/images/avatar.png" />
              <Info>
                <Writer id={el._id}>{props.el?.writer}</Writer>
                <Content id={el._id}>{props.el?.contents}</Content>
                <CreatedAt id={el._id}>{props.el?.createdAt}</CreatedAt>
              </Info>
              <Button>
                <UpdatePencil
                  src="/images/pencil.png"
                  onClick={onClickUpdate}
                ></UpdatePencil>
                <DeliteIcon src="/images/delite.png"></DeliteIcon>
              </Button>
            </CommentWrapper>
          )}
        </Wrapper>
      ))}
      {isEdit && (
        <BoardCommentWrite
          isEdit={isEdit}
          setIsEdit={setIsEdit}
          el={props.el}
        />
      )}
    </>
  );
}

{
  /* <>
      {!isEdit && (
        <Wrapper>
          {props.data?.fetchBoardComments.map((el) => (
            <CommentWrapper key={el._id} el={el}>
              <Avatar src="/images/avatar.png" />
              <Info>
                <Writer>{props.el?.writer}</Writer>
                <Content>{props.el?.contents}</Content>
                <CreatedAt>{props.el?.createdAt}</CreatedAt>
              </Info>
              <Button>
                <UpdatePencil
                  src="/images/pencil.png"
                  onClick={onClickUpdate}
                ></UpdatePencil>
                <DeliteIcon src="/images/delite.png"></DeliteIcon>
              </Button>
            </CommentWrapper>
          ))}
        </Wrapper>
      )}
      {isEdit && (
        <BoardCommentWrite
          isEdit={isEdit}
          setIsEdit={setIsEdit}
          el={props.el}
        />
      )}
    </> */
}

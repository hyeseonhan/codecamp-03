import ProductCommentWrite from "../write/ProductCommentWrite.container";
import ReplyCommentWrite from "../../comment-reply/write/ReplyCommentWrite.container";
import ReplyCommentList from "../../comment-reply/list/ReplyCommentList.container";
import { useState } from "react";
import {
  OutWrapper,
  Wrapper,
  Avatar,
  InnerWrapper,
  InfoWrapper,
  Writer,
  Content,
  Date,
  OptionWrapper,
  UpdateIcon,
  DeleteIcon,
  Reply,
} from "./ProductCommentlist.styles";

export default function ProductCommentListUIItem(props) {
  const [isEdit, setIsEdit] = useState(false);
  const [isReply, setIsReply] = useState(false);

  function onClickUpdate() {
    setIsEdit(true);
  }

  function onClickDelete() {}

  function onClickReply() {
    setIsReply(true);
  }

  return (
    <OutWrapper>
      <Wrapper>
        {!isEdit && (
          <>
            <InnerWrapper>
              <Avatar src="/images/avatar.png" />
              <InfoWrapper>
                <Writer>{props.el?.user?.name}</Writer>
                <Content>{props.el?.contents}</Content>
                <Date>{props.el?.createdAt.slice(0, 10)}</Date>
              </InfoWrapper>
            </InnerWrapper>
            {!isEdit ? (
              <OptionWrapper>
                <UpdateIcon onClick={onClickUpdate} src="/images/pencil.png" />
                <DeleteIcon onClick={onClickDelete} src="/images/delite.png" />
              </OptionWrapper>
            ) : (
              <Reply onClick={onClickReply} src="/images/reply.png" />
            )}
          </>
        )}
        {isEdit && (
          <ProductCommentWrite
            isEdit={isEdit}
            el={props.el}
            setIsEdit={setIsEdit}
          />
        )}
      </Wrapper>
      {isReply && (
        <ReplyCommentWrite
          el={props.el}
          isReply={isReply}
          setIsReply={setIsReply}
        />
      )}
      <ReplyCommentList el={props.el} />
    </OutWrapper>
  );
}

import { useState } from "react";
import {
  Wrapper,
  LeftWrapper,
  ReplyIcon,
  Avatar,
  InnerWrapper,
  InfoWrapper,
  Writer,
  Content,
  OptionWrapper,
  UpdateIcon,
  DeleteIcon,
  Reply,
} from "./ReplyCommentLists.styles";
import ReplyCommentWrite from "../../comment-reply/write/ReplyCommentWrite.container";

export default function ReplyCommentListUIItem(props) {
  // console.log(props.Answerel?.user?.name)
  const [isEditReply, setIsEditReply] = useState(false);
  const [isCommentReply, setIsCommentReply] = useState(false);

  function onClickUpdate() {
    setIsEditReply(true);
  }

  function onClickDelete() {}

  function onClickReply() {
    setIsCommentReply(true);
  }

  return (
    <>
      {!isEditReply && (
        <Wrapper>
          <InnerWrapper>
            <LeftWrapper>
              <ReplyIcon src="/images/replyarrow.png" />
              <Avatar src="/images/avatar.png" />
            </LeftWrapper>
            <InfoWrapper>
              <Writer>{props.Answerel?.user?.name}</Writer>
              <Content>{props.Answerel?.contents}</Content>
            </InfoWrapper>
          </InnerWrapper>
          <OptionWrapper>
            <UpdateIcon onClick={onClickUpdate} src="/images/graypencil.png" />
            <DeleteIcon onClick={onClickDelete} src="/images/delite.png" />
            {isCommentReply && (
              <Reply onClick={onClickReply} src="/images/reply.png" />
            )}
          </OptionWrapper>
        </Wrapper>
      )}
      {isEditReply && (
        <ReplyCommentWrite
          Answerel={props.Answerel}
          isEditReply={isEditReply}
          setIsEditReply={setIsEditReply}
        />
      )}
    </>
  );
}

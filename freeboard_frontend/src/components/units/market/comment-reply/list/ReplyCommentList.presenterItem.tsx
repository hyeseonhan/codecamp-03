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
  ComponentWrapper1,
  ComponentWrapper,
} from "./ReplyCommentLists.styles";
import ReplyCommentWrite from "../../comment-reply/write/ReplyCommentWrite.container";
import { FETCH_USER_LOGGED_IN } from "./ReplyCommentList.queries";
import { useQuery } from "@apollo/client";

export default function ReplyCommentListUIItem(props) {
  // console.log(props.Answerel?.user?.name)
  const [isEditReply, setIsEditReply] = useState(false);
  const [isCommentReply, setIsCommentReply] = useState(false);

  const { data: fetchUserLoggedIndata } = useQuery(FETCH_USER_LOGGED_IN);

  // 이 변수를 넘기기 위해 pages/product-detail에서 state 끌어올리기 해줌.
  const ReplyCompare =
    fetchUserLoggedIndata?.fetchUserLoggedIn.email ===
    props.Answerel?.user?.email;

  props.setIsReplySeller(ReplyCompare);
  //

  function onClickUpdate() {
    setIsEditReply(true);
  }

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
            {ReplyCompare ? (
              <>
                <UpdateIcon
                  onClick={onClickUpdate}
                  src="/images/graypencil.png"
                />
                <DeleteIcon
                  onClick={props.onClickDelete(props.Answerel?._id)}
                  src="/images/delite.png"
                />
              </>
            ) : (
              <Reply onClick={onClickReply} src="/images/reply.png" />
            )}
          </OptionWrapper>
        </Wrapper>
      )}
      <ComponentWrapper1>
        {isEditReply && (
          <ReplyCommentWrite
            Answerel={props.Answerel}
            isEditReply={isEditReply}
            setIsEditReply={setIsEditReply}
          />
        )}
      </ComponentWrapper1>
      <ComponentWrapper>
        {/* 대대댓 등록 안됨. */}
        {isCommentReply && (
          <ReplyCommentWrite
            Answerel={props.Answerel}
            isCommentReply={isCommentReply}
            setIsCommentReply={setIsCommentReply}
          />
        )}
      </ComponentWrapper>
    </>
  );
}

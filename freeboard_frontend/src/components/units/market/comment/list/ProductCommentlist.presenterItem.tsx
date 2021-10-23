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
  ComponentWrpper,
  ComponentWrpper2,
  Line,
} from "./ProductCommentlist.styles";
import { FETCH_USER_LOGGED_IN } from "../../comment-reply/list/ReplyCommentList.queries";
import { useQuery } from "@apollo/client";

export default function ProductCommentListUIItem(props) {
  const [isEdit, setIsEdit] = useState(false);
  const [isReply, setIsReply] = useState(false);

  const { data: fetchUserLoggedIndata } = useQuery(FETCH_USER_LOGGED_IN);

  const CommentCompare =
    fetchUserLoggedIndata?.fetchUserLoggedIn.email === props.el?.user?.email;

  props.setIsCommentSeller(CommentCompare);

  function onClickUpdate() {
    setIsEdit(true);
  }

  function onClickDelete() {}

  function onClickReply() {
    setIsReply(true);
  }

  // console.log("aaa", props.el?._id, props.el?.user);

  return (
    <>
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
              {/* isCommentSeller 는 state이다. */}
              {/* {!props.isCommentSeller ? ( */}
              {CommentCompare ? (
                <OptionWrapper>
                  <UpdateIcon
                    onClick={onClickUpdate}
                    src="/images/pencil.png"
                  />
                  <DeleteIcon
                    onClick={onClickDelete}
                    src="/images/delite.png"
                  />
                </OptionWrapper>
              ) : (
                <Reply onClick={onClickReply} src="/images/reply.png" />
              )}

              {/* {props.el?._id && (
              <OptionWrapper>
                <UpdateIcon onClick={onClickUpdate} src="/images/pencil.png" />
                <DeleteIcon onClick={onClickDelete} src="/images/delite.png" />
              </OptionWrapper>
            )}
            {!props.el?.user?._id && (
              <Reply onClick={onClickReply} src="/images/reply.png" />
            )} */}
            </>
          )}
        </Wrapper>
      </OutWrapper>
      <ComponentWrpper>
        {isEdit && (
          <ProductCommentWrite
            isEdit={isEdit}
            el={props.el}
            setIsEdit={setIsEdit}
          />
        )}
        <ComponentWrpper2>
          {isReply && (
            <ReplyCommentWrite
              el={props.el}
              isReply={isReply}
              setIsReply={setIsReply}
            />
          )}
        </ComponentWrpper2>
        {/* 상위 폴더에서 내려준 state. ReplyCompare 변수 값이 저장되어있다 */}
        <ReplyCommentList
          el={props.el}
          setIsReplySeller={props.setIsReplySeller}
        />
      </ComponentWrpper>
      <Line />
    </>
  );
}

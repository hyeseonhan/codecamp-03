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
import { DELETE_USED_ITEM_QUESTION } from "./ProductCommentlist.queries";
import { useMutation, useQuery } from "@apollo/client";
import { IProdectCommentlistUIItemProps } from "./ProductCommentlist.types";
import {
  IMutation,
  IMutationDeleteUseditemQuestionArgs,
  IQuery,
} from "../../../../../commons/types/generated.types";

export default function ProductCommentListUIItem(
  props: IProdectCommentlistUIItemProps
) {
  const [isEdit, setIsEdit] = useState(false);
  const [isReply, setIsReply] = useState(false);

  const { data: fetchUserLoggedIndata } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);

  const CommentCompare =
    fetchUserLoggedIndata?.fetchUserLoggedIn.email === props.el?.user?.email;
  props.setIsCommentSeller(CommentCompare);

  const [deleteUseditemQuestion] = useMutation<
    Pick<IMutation, "deleteUseditemQuestion">,
    IMutationDeleteUseditemQuestionArgs
  >(DELETE_USED_ITEM_QUESTION);

  function onClickUpdate() {
    setIsEdit(true);
  }

  const onClickDelete = (useditemQuestionId) => async () => {
    try {
      await deleteUseditemQuestion({
        variables: { useditemQuestionId: useditemQuestionId },
        update(cache, { data }) {
          const deleteId = data.deleteUseditemQuestion;
          cache.modify({
            fields: {
              fetchUseditemQuestions: (prev, { readField }) => {
                const newFetchUseditemQuestions = prev.filter(
                  (el) => readField("_id", el) !== deleteId
                );
                return [...newFetchUseditemQuestions];
              },
            },
          });
        },
      });
      alert("????????? ?????????????????????.");
    } catch (error) {
      alert(error.message);
    }
  };

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
              {/* isCommentSeller ??? state??????. */}
              {/* {!props.isCommentSeller ? ( */}
              {CommentCompare ? (
                <OptionWrapper>
                  <UpdateIcon
                    onClick={onClickUpdate}
                    src="/images/pencil.png"
                  />
                  <DeleteIcon
                    onClick={onClickDelete(props.el?._id)}
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
        {/* ?????? ???????????? ????????? state. ReplyCompare ?????? ?????? ?????????????????? */}
        <ReplyCommentList
          el={props.el}
          setIsReplySeller={props.setIsReplySeller}
        />
      </ComponentWrpper>
      <Line />
    </>
  );
}

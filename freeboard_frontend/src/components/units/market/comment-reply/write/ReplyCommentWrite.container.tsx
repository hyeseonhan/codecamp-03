import { useMutation, useQuery } from "@apollo/client";
import router from "next/router";
import { useState } from "react";
import ReplyCommentWriteUI from "./ReplyCommentWrite.presenter";
import {
  CREATE_USED_ITEM_QUESTION_ANSWER,
  UPDATE_USED_ITEM_QUESTION_ANSWER,
} from "./ReplyCommentWrite.queries";
import { FETCH_USED_ITEM_QUESTION_ANSWERS } from "../../comment-reply/list/ReplyCommentList.queries";

export default function ReplyCommentWrite(props) {
  const [contents, setContents] = useState("");

  const [createUseditemQuestionAnswer] = useMutation(
    CREATE_USED_ITEM_QUESTION_ANSWER
  );

  const [updateUseditemQuestionAnswer] = useMutation(
    UPDATE_USED_ITEM_QUESTION_ANSWER
  );

  function onChangeContents(event) {
    setContents(event.target.value);
  }

  async function onClickReply() {
    try {
      await createUseditemQuestionAnswer({
        variables: {
          createUseditemQuestionAnswerInput: {
            contents: contents,
          },
          useditemQuestionId: props.el._id, // ProductCommentListUIItem에서 댓글의 대댓이니까 댓글의 id를 받아야된다.
        },
      });
      console.log("reply:", contents);
    } catch (error) {
      alert(error.mesaage);
    }
  }

  async function onClickReplyUpate(event) {
    try {
      await updateUseditemQuestionAnswer({
        variables: {
          updateUseditemQuestionAnswerInput: {
            contents: contents,
          },
          useditemQuestionAnswerId: event.target.id,
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM_QUESTION_ANSWERS,
            variables: {
              useditemQuestionId: props.Answerel?.useditemQuestion._id,
            },
          },
        ],
      });
      console.log("adf", contents);
      console.log(props.Answerel);
      props.setIsEditReply?.(false);
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <ReplyCommentWriteUI
      contents={contents}
      isReply={props.isReply}
      onClickReply={onClickReply}
      onClickReplyUpate={onClickReplyUpate}
      onChangeContents={onChangeContents}
      Answerel={props.Answerel}
      setIsEditReply={props.setIsEditReply}
    />
  );
}

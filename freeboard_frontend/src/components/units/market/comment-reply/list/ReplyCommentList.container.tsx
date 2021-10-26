import { useQuery, useMutation } from "@apollo/client";
import ReplyCommentListUI from "./ReplyCommentList.presenter";
import {
  FETCH_USED_ITEM_QUESTION_ANSWERS,
  DELETE_USED_ITEM_QUESTION_ANSWER,
} from "./ReplyCommentList.queries";

export default function ReplyCommentList(props) {
  const { data } = useQuery(FETCH_USED_ITEM_QUESTION_ANSWERS, {
    variables: { useditemQuestionId: props.el?._id }, // ProductCommentlist.presenterItem 에서 el받아서 내려줌.
  });

  const [deleteUseditemQuestionAnswer] = useMutation(
    DELETE_USED_ITEM_QUESTION_ANSWER
  );

  const onClickDelete = (useditemQuestionAnswerId) => async () => {
    try {
      await deleteUseditemQuestionAnswer({
        variables: { useditemQuestionAnswerId: useditemQuestionAnswerId },
        update(cache, { data }) {
          const deleteId = data.deleteUseditemQuestionAnswer;
          cache.modify({
            fields: {
              fetchUseditemQuestionAnswers: (prev, { readField }) => {
                const newFetchUseditemQuestionAnswers = prev.filter(
                  (el) => readField("_id", el) !== deleteId
                );
                return [...newFetchUseditemQuestionAnswers];
              },
            },
          });
        },
      });
      alert("대댓글이 삭제되었습니다.");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <ReplyCommentListUI
      data={data}
      setIsReplySeller={props.setIsReplySeller}
      onClickDelete={onClickDelete}
    />
  );
}

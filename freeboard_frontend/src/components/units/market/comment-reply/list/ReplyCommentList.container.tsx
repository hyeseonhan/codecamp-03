import { useQuery } from "@apollo/client";
import ReplyCommentListUI from "./ReplyCommentList.presenter";
import { FETCH_USED_ITEM_QUESTION_ANSWERS } from "./ReplyCommentList.queries";

export default function ReplyCommentList(props) {
  const { data } = useQuery(FETCH_USED_ITEM_QUESTION_ANSWERS, {
    variables: { useditemQuestionId: props.el?._id }, // ProductCommentlist.presenterItem 에서 el받아서 내려줌.
  });
  return (
    <ReplyCommentListUI data={data} setIsReplySeller={props.setIsReplySeller} />
  );
}

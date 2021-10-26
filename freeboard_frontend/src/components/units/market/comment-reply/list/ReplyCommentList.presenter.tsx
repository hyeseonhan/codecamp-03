import ReplyCommentListUIItem from "./ReplyCommentList.presenterItem";

export default function ReplyCommentListUI(props) {
  return (
    <>
      {props.data?.fetchUseditemQuestionAnswers.map((Answerel) => (
        <ReplyCommentListUIItem
          key={Answerel._id}
          Answerel={Answerel}
          setIsReplySeller={props.setIsReplySeller}
          onClickDelete={props.onClickDelete}
        />
      ))}
    </>
  );
}

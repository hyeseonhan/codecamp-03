import ProductCommentListUIItem from "./ProductCommentlist.presenterItem";

export default function ProductCommentListUI(props) {
  return (
    <>
      {props.data?.fetchUseditemQuestions.map((el) => (
        <ProductCommentListUIItem
          key={el._id}
          el={el}
          // 상위 폴더에서 가져옴(아이콘 변경하기 위한, ReplyCompare 변수값이 저장되어있다.)
          setIsReplySeller={props.setIsReplySeller}
          isReplySeller={props.isReplySeller}
          setIsCommentSeller={props.setIsCommentSeller}
          isCommentSeller={props.isCommentSeller}
        />
      ))}
    </>
  );
}

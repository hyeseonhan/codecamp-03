import ProductCommentListUIItem from "./ProductCommentlist.presenterItem";

export default function ProductCommentListUI(props) {
  return (
    <>
      {props.data?.fetchUseditemQuestions.map((el) => (
        <ProductCommentListUIItem key={el._id} el={el} />
      ))}
    </>
  );
}

import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import {
  IQuery,
  IQueryFetchUseditemQuestionsArgs,
} from "../../../../../commons/types/generated.types";
import ProductCommentListUI from "./ProductCommentlist.presenter";
import { FETCH_USED_ITEM_QUESTIONS } from "./ProductCommentlist.queries";

export default function ProductCommentList(props) {
  const router = useRouter();
  const { data } = useQuery<
    Pick<IQuery, "fetchUseditemQuestions">,
    IQueryFetchUseditemQuestionsArgs
  >(FETCH_USED_ITEM_QUESTIONS, {
    variables: { useditemId: String(router.query.useditemId) },
  });

  return (
    <ProductCommentListUI
      data={data}
      // 최상위 폴더인 pages/product-detail에서 만든 state값을 가져옴, ReplyCompare 변수값이 저장되어있다.
      setIsReplySeller={props.setIsReplySeller}
      isReplySeller={props.isReplySeller}
      setIsCommentSeller={props.setIsCommentSeller}
      isCommentSeller={props.isCommentSeller}
    />
  );
}

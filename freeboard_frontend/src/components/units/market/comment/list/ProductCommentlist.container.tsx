import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import ProductCommentListUI from "./ProductCommentlist.presenter";
import { FETCH_USED_ITEM_QUESTIONS } from "./ProductCommentlist.queries";

export default function ProductCommentList(props) {
  const router = useRouter();
  const { data } = useQuery(FETCH_USED_ITEM_QUESTIONS, {
    variables: { useditemId: router.query.useditemId },
  });

  return <ProductCommentListUI data={data} />;
}

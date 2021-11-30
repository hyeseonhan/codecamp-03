import ProductDetail from "../../../../src/components/units/market/detail/ProductDetail.container";
import ProductCommentWrite from "../../../../src/components/units/market/comment/write/ProductCommentWrite.container";
import ProductCommentList from "../../../../src/components/units/market/comment/list/ProductCommentlist.container";
import { useState } from "react";

export default function ProductDetailPage() {
  // 대댓글 아이콘 email로 비교해서 조건부렌더링하기 위해 state 끌어올릴 때 사용
  const [isReplySeller, setIsReplySeller] = useState("");

  // 댓글 아이콘 email 비교해서 조건부렌더링
  const [isCommentSeller, setIsCommentSeller] = useState("");

  return (
    <>
      <ProductDetail />
      <ProductCommentWrite />
      <ProductCommentList
        setIsReplySeller={setIsReplySeller}
        isReplySeller={isReplySeller}
        setIsCommentSeller={setIsCommentSeller}
        isCommentSeller={isCommentSeller}
      />
    </>
  );
}

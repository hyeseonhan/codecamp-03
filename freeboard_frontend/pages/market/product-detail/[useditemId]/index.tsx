import ProductDetail from "../../../../src/components/units/market/detail/ProductDetail.container";
import ProductCommentWrite from "../../../../src/components/units/market/comment/write/ProductCommentWrite.container";
import ProductCommentList from "../../../../src/components/units/market/comment/list/ProductCommentlist.container";

export default function ProductDetailPage() {
  return (
    <>
      <ProductDetail />;
      <ProductCommentWrite />
      <ProductCommentList />
    </>
  );
}

import ProductPost from "../../../src/components/units/market/post/ProductPost.container";
import { withAuth } from "../../../src/components/commons/hocs/withAuth";

const ProductPostPage = () => {
  return <ProductPost />;
};

export default withAuth(ProductPostPage);

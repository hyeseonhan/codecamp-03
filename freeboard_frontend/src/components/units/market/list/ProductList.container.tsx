import { useRouter } from "next/router";
import ProductListUI from "./ProductList.presenter";

export default function ProductList() {
  const router = useRouter();
  const onClickMoveToPost = (event) => router.push(event.target.id);

  return <ProductListUI onClickMoveToPost={onClickMoveToPost} />;
}

import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import ProductListUI from "./ProductList.presenter";
import { FETCH_USED_ITEMS } from "./ProductList.queries";

export default function ProductList() {
  const router = useRouter();
  const { data } = useQuery(FETCH_USED_ITEMS);
  const onClickMoveToPost = (event) => router.push(event.target.id);

  function onClickMoveToProductDetail(event) {
    router.push(`/market/product-detail/${event.currentTarget.id}`);

    const baskets = JSON.parse(localStorage.getItem("baskets")) || [];
  }

  return (
    <ProductListUI
      data={data}
      onClickMoveToPost={onClickMoveToPost}
      onClickMoveToProductDetail={onClickMoveToProductDetail}
    />
  );
}

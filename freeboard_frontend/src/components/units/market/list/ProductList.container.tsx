import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import ProductListUI from "./ProductList.presenter";
import { FETCH_USED_ITEMS } from "./ProductList.queries";

export default function ProductList() {
  const router = useRouter();
  const { data } = useQuery(FETCH_USED_ITEMS, {
    variables: { page: 1 },
  });

  // const onClickMoveToPost = (event) => router.push(event.target.id);
  function onClickMoveToPost() {
    router.push("/market/product-post");
  }

  const onClickMoveToProductDetail = (el) => (event) => {
    router.push(`/market/product-detail/${event.currentTarget.id}`);

    const baskets = JSON.parse(localStorage.getItem("baskets")) || [];
    console.log(baskets);

    let isExists = false;
    baskets.forEach((basketEl) => {
      if (el._id === basketEl._id) isExists = true;
    });
    if (isExists) {
      return;
    }

    // 아니 시발 이거 안썻다고 안된다고..? 왜쥬
    const newEl = { ...el }; // 얕은 복사
    delete newEl.__typename;
    baskets.push(newEl);

    if (baskets.length > 3) baskets.shift();

    localStorage.setItem("baskets", JSON.stringify(baskets));
    console.log("sdfsdf", el);
  };

  return (
    <ProductListUI
      data={data}
      onClickMoveToPost={onClickMoveToPost}
      onClickMoveToProductDetail={onClickMoveToProductDetail}
    />
  );
}

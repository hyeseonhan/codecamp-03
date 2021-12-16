import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import ProductListUI from "./ProductList.presenter";
import { FETCH_USED_ITEMS } from "./ProductList.queries";

export default function ProductList() {
  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter();
  const { data, fetchMore } = useQuery(FETCH_USED_ITEMS, {
    variables: { page: 0, isSoldout: false },
  });

  function onloadMore() {
    if (!data) return;
    fetchMore({
      // variables: { page: data?.fetchUseditems.length / 10 + 1 },
      variables: { page: Math.ceil(data?.fetchUseditems.length / 10) + 1 },
      updateQuery: (prev, { fetchMoreResult }) => {
        return {
          fetchUseditems: [
            ...prev.fetchUseditems,
            ...fetchMoreResult.fetchUseditems,
          ],
        };
      },
    });
  }

  function onClickTablesell() {
    setIsVisible(false);
  }

  function onClickTablesold() {
    setIsVisible(true);
  }

  // const onClickMoveToPost = (event) => router.push(event.target.id);
  function onClickMoveToPost() {
    router.push("/market/product-post");
  }

  const onClickMoveToProductDetail = (el) => (event) => {
    router.push(`/market/product-detail/${event.currentTarget.id}`);

    const recentlybasket =
      JSON.parse(localStorage.getItem("recentlybasket")) || [];

    // console.log("rr", recentlybasket);

    let isSame = false;
    recentlybasket.forEach((recentlybasketEl) => {
      if (el._id === recentlybasketEl._id) isSame = true;
    });
    if (isSame) {
      return;
    }

    // const newEl = { ...el }; // 얕은 복사
    // delete newEl.__typename;
    // baskets.push(newEl);

    recentlybasket.push(el);

    if (recentlybasket.length > 12) recentlybasket.shift();

    localStorage.setItem("recentlybasket", JSON.stringify(recentlybasket));
  };

  return (
    <ProductListUI
      data={data}
      onClickMoveToPost={onClickMoveToPost}
      onClickMoveToProductDetail={onClickMoveToProductDetail}
      onloadMore={onloadMore}
      onClickTablesell={onClickTablesell}
      onClickTablesold={onClickTablesold}
      isVisible={isVisible}
    />
  );
}

import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useState } from "react";
import ProductListUI from "./ProductList.presenter";
import {
  FETCH_USED_ITEMS,
  // FETCH_USED_ITEMS_I_PICKED,
  // TOGGLE_USED_ITEM_PICK,
} from "./ProductList.queries";

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
    recentlybasket.push(el);
    // console.log("rr", recentlybasket);

    // let isExists = false;
    // recentlybasket.forEach((basketEl) => {
    //   if (el._id === basketEl._id) isExists = true;
    // });
    // if (isExists) {
    //   return;
    // }

    localStorage.setItem("recentlybasket", JSON.stringify(recentlybasket));

    // const baskets = JSON.parse(localStorage.getItem("baskets")) || [];
    // console.log(baskets);

    // let isExists = false;
    // baskets.forEach((basketEl) => {
    //   if (el._id === basketEl._id) isExists = true;
    // });
    // if (isExists) {
    //   return;
    // }

    // const newEl = { ...el }; // 얕은 복사
    // delete newEl.__typename;
    // baskets.push(newEl);

    // if (baskets.length > 3) baskets.shift();

    // localStorage.setItem("baskets", JSON.stringify(baskets));
    // // console.log("sdfsdf", el);
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

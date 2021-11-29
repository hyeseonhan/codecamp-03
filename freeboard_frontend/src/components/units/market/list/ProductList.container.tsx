import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useState } from "react";
import ProductListUI from "./ProductList.presenter";
import {
  FETCH_USED_ITEMS,
  // FETCH_USED_ITEMS_I_PICKED,
  TOGGLE_USED_ITEM_PICK,
} from "./ProductList.queries";

export default function ProductList() {
  const [isVisible, setIsVisible] = useState(false);
  // const [isPicked, setIsPicked] = useState(true);
  const router = useRouter();
  const { data, fetchMore } = useQuery(FETCH_USED_ITEMS, {
    variables: { page: 0, isSoldout: false },
  });

  const [toggleUseditemPick] = useMutation(TOGGLE_USED_ITEM_PICK);

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

  // const { data: pickeddata } = useQuery(FETCH_USED_ITEMS_I_PICKED, {
  //   variables: {
  //     search: "",
  //   },
  // });

  // useEffect(() => {
  //   for (let i = 0; i < pickeddata?.fetchUseditemsIPicked.length; i++) {
  //     if (
  //       pickeddata?.fetchUseditemsIPicked[i]._id === router.query.useditemId
  //     ) {
  //       setIsPicked(true);
  //       break;
  //     } else {
  //       setIsPicked(false);
  //     }
  //   }
  // }, [pickeddata]);

  // async function onClickPicked() {
  //   await toggleUseditemPick({
  //     variables: { useditemId: router.query.useditemId },
  //     refetchQueries: [
  //       {
  //         query: FETCH_USED_ITEMS,
  //         variables: { useditemId: router.query.useditemId },
  //       },
  //     ],
  //   });
  //   setIsPicked((prev) => !prev);
  // }

  // const onClickMoveToPost = (event) => router.push(event.target.id);
  function onClickMoveToPost() {
    router.push("/market/product-post");
  }

  const onClickMoveToProductDetail = (el) => (event) => {
    router.push(`/market/product-detail/${event.currentTarget.id}`);

    const baskets = JSON.parse(localStorage.getItem("baskets")) || [];
    // console.log(baskets);

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
      // onClickPicked={onClickPicked}
      // isPicked={isPicked}
      onClickMoveToPost={onClickMoveToPost}
      onClickMoveToProductDetail={onClickMoveToProductDetail}
      onloadMore={onloadMore}
      onClickTablesell={onClickTablesell}
      onClickTablesold={onClickTablesold}
      isVisible={isVisible}
    />
  );
}

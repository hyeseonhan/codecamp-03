import ListTableSoldUI from "./ListTableSold.presenter";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { FETCH_USED_ITEMS } from "./ListTableSold.queries";

export default function ListTableSold() {
  const router = useRouter();
  const { data, fetchMore } = useQuery(FETCH_USED_ITEMS, {
    variables: { page: 0, isSoldout: true },
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

  // const onClickMoveToPost = (event) => router.push(event.target.id);
  function onClickMoveToPost() {
    router.push("/market/product-post");
  }

  const onClickMoveToProductDetail = (el) => (event) => {
    router.push(`/market/product-detail/${event.currentTarget.id}`);

    // const baskets = JSON.parse(localStorage.getItem("baskets")) || [];
    // console.log(baskets);

    // let isExists = false;
    // baskets.forEach((basketEl) => {
    //   if (el._id === basketEl._id) isExists = true;
    // });
    // if (isExists) {
    //   return;
    // }

    // // 아니 시발 이거 안썻다고 안된다고..? 왜쥬
    // const newEl = { ...el }; // 얕은 복사
    // delete newEl.__typename;
    // baskets.push(newEl);

    // if (baskets.length > 3) baskets.shift();

    // localStorage.setItem("baskets", JSON.stringify(baskets));
    // console.log("sdfsdf", el);
  };
  return (
    <ListTableSoldUI
      data={data}
      onClickMoveToPost={onClickMoveToPost}
      onClickMoveToProductDetail={onClickMoveToProductDetail}
      onloadMore={onloadMore}
    />
  );
}

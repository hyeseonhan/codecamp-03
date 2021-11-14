import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { FETCH_BOARDS, FETCH_USED_ITEMS } from "./Home.queries";
import HomeUI from "./Home.presenter";

export default function Home() {
  const router = useRouter();

  const { data: Itemsdata } = useQuery(FETCH_USED_ITEMS, {
    variables: { page: 1 },
  });

  const { data: Boardsdata } = useQuery(FETCH_BOARDS, {
    variables: { page: 1 },
  });

  // function onClickMoveToProductDetail(event) {
  //   router.push(`/market/product-detail/${event.currentTarget.id}`);
  // }

  const onClickMoveToBoardDetail = () => (event) => {
    router.push(`/boards/${event.currentTarget.id}`);
  };

  const onClickMoveToProductDetail = () => (event) => {
    router.push(`/market/product-detail/${event.currentTarget.id}`);
  };

  return (
    <HomeUI
      Itemsdata={Itemsdata}
      Boardsdata={Boardsdata}
      onClickMoveToBoardDetail={onClickMoveToBoardDetail}
      onClickMoveToProductDetail={onClickMoveToProductDetail}
    />
  );
}

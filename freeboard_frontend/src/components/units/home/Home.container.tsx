import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import {
  FETCH_BOARDS_OF_THE_BEST,
  FETCH_USED_ITEMS_OF_THE_BEST,
} from "./Home.queries";
import HomeUI from "./Home.presenter";

export default function Home() {
  const router = useRouter();

  const { data: dataBoardsOfTheBest } = useQuery(FETCH_BOARDS_OF_THE_BEST);
  const { data: dataMarketsOfTheBest } = useQuery(FETCH_USED_ITEMS_OF_THE_BEST);

  const onClickMoveToBoardDetail = () => (event) => {
    router.push(`/boards/${event.currentTarget.id}`);
  };

  const onClickMoveToProductDetail = () => (event) => {
    router.push(`/market/product-detail/${event.currentTarget.id}`);
  };

  return (
    <HomeUI
      dataBoardsOfTheBest={dataBoardsOfTheBest}
      dataMarketsOfTheBest={dataMarketsOfTheBest}
      onClickMoveToBoardDetail={onClickMoveToBoardDetail}
      onClickMoveToProductDetail={onClickMoveToProductDetail}
    />
  );
}

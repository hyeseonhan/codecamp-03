import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import BoardListUI from "./Boardlist.presenter";
import { FETCH_BOARDS, FETCH_BOARDS_COUNT } from "./Boardlist.queries";

export default function BoardList(props) {
  const router = useRouter();
  const [startPage, setStartPage] = useState(1);

  const [keyword, setKeyword] = useState("");

  const { data, refetch } = useQuery(FETCH_BOARDS, {
    variables: { page: startPage, search: keyword },
  });
  const { data: dataBoardsCount } = useQuery(FETCH_BOARDS_COUNT, {
    variables: { search: keyword },
  });
  const lastPage = Math.ceil(dataBoardsCount?.fetchBoardsCount / 10);
  const [current, setCurrent] = useState(1);

  function onClickMoveToBoard() {
    router.push("/boards/board-post");
  }

  function onClickMoveToBoardDetail(event) {
    router.push(`/boards/${event.currentTarget.id}`);
  }

  function onClickPrevPage() {
    if (startPage === 1) return;
    setStartPage((prev) => prev - 10);
    setCurrent(startPage - 10);
  }

  function onClickNextPage() {
    if (startPage + 10 > lastPage) return;
    setStartPage((prev) => prev + 10);
    setCurrent(startPage + 10);
  }

  function onClickPage(event) {
    refetch({
      page: Number(event.target.id),
    });
    setCurrent(Number(event.target.id));
  }

  function onChangeKeyword(value) {
    setKeyword(value);
    setCurrent(1);
  }

  return (
    <BoardListUI
      data={data}
      onClickMoveToBoard={onClickMoveToBoard}
      onClickMoveToBoardDetail={onClickMoveToBoardDetail}
      onClickPage={onClickPage}
      onClickPrevPage={onClickPrevPage}
      onClickNextPage={onClickNextPage}
      startPage={startPage}
      lastPage={lastPage}
      current={current}
      refetch={refetch}
      onChangeKeyword={onChangeKeyword}
      keyword={keyword}
    />
  );
}

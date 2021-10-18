import { gql, useQuery } from "@apollo/client";
// import { useEffect } from "react";
import { useState } from "react";

const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      _id
      writer
      title
    }
  }
`;

export default function BasketLogin() {
  const { data } = useQuery(FETCH_BOARDS);
  const [basketGet, setBasketGet] = useState([]);
  // const [deleteBasket, setDeleteBasket] = useState([]);

  const onClickBasket = (el) => () => {
    const baskets = JSON.parse(localStorage.getItem("baskets")) || [];
    baskets.push(el);

    localStorage.setItem("baskets", JSON.stringify(baskets));
    setBasketGet(JSON.parse(localStorage.getItem("baskets")));
  };

  const onClickRemove = (el) => () => {
    let baskets = JSON.parse(localStorage.getItem("baskets")) || [];

    // baskets.forEach((basket, _id) => {
    //   if (basket === null) {
    //     return;
    //   }
    //   if (basket._id === el._id) {
    //     delete baskets[_id];
    //   }
    // });

    // splic를 사용해도 되는데 filter가 더 간단
    baskets = baskets.filter((cur) => {
      return cur._id !== el._id;
    });

    localStorage.setItem("baskets", JSON.stringify(baskets));
  };

  // function onClickLogin() {}

  // useEffect(() => {
  //   const Items = JSON.parse(localStorage.getItem("baskets")) || [];
  //   setBasketGet(Items);
  // }, []);

  return (
    <>
      {data?.fetchBoards.map((el, index) => (
        <div key={el._id}>
          <span style={{ marginRight: "10px" }}>{index}</span>
          <span style={{ marginRight: "10px" }}>{el.writer}</span>
          <span style={{ marginRight: "10px" }}>{el.title}</span>
          <button style={{ marginRight: "10px" }} onClick={onClickBasket(el)}>
            게시물담기
          </button>
          <button onClick={onClickRemove(el)}>담기취소</button>
        </div>
      ))}
      {/* <button onClick={onClickLogin}>로그인하기</button> */}
      <br />
      <br />
      장바구니 목록
      {basketGet.map((el, index) => (
        <div key={el._id}>
          <span>{index}</span>
          <span>{el.writer}</span>
          <span>{el.title}</span>
        </div>
      ))}
    </>
  );
}

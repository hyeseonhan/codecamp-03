import { gql, useQuery } from "@apollo/client";

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

  const onClickBasket = (el) => () => {
    const baskets = JSON.parse(localStorage.getItem("baskets")) || [];
    baskets.push(el);

    localStorage.setItem("baskets", JSON.stringify(baskets));
  };

  const onClickRemove = (el) => () => {
    const baskets = JSON.parse(localStorage.getItem("baskets")) || [];

    baskets.forEach((basket, _id) => {
      if (basket === null) {
        return;
      }
      if (basket._id === el._id) {
        delete baskets[_id];
      }
    });

    localStorage.setItem("baskets", JSON.stringify(baskets));
    localStorage.removeItem("baskets[_id]");

    // localStorage.setItem("baskets", JSON.stringify(baskets));
  };

  function onClickLogin() {}

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
      <button onClick={onClickLogin}>로그인하기</button>
    </>
  );
}

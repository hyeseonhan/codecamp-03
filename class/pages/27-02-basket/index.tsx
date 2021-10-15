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

export default function BasketPage() {
  const { data } = useQuery(FETCH_BOARDS);

  const onClickBasket = (el) => () => {
    const baskets = JSON.parse(localStorage.getItem("baskets")) || [];

    // 체크!!! (이미 담았는지 체크!!!)
    let isExists = false; // 이미 있는지 없는지
    baskets.forEach((basketEl) => {
      if (el._id === basketEl._id) isExists = true;
    });
    if (isExists) {
      alert("이미 장바구니에 담으셨습니다!");
      return;
    }

    const newEl = { ...el }; // 얕은 복사
    delete newEl.__typename;
    baskets.push(newEl);
    // baskets.push(el); 이렇게 하면 원본을 지우는 방식이라 에러가 남

    // console.log("담기:", el);
    localStorage.setItem("baskets", JSON.stringify(baskets));
  };

  return (
    <>
      {data?.fetchBoards.map((el, index) => (
        <div key={el._id}>
          <span style={{ marginRight: "10px" }}>{index}</span>
          <span style={{ marginRight: "10px" }}>{el.writer}</span>
          <span style={{ marginRight: "10px" }}>{el.title}</span>
          <button onClick={onClickBasket(el)}>장바구니담기</button>
        </div>
      ))}
    </>
  );
}

// ["철수","영희","훈이"].map((el) => el + 어린이) // 결과: 철수어린이, 영희어린이, 훈이어린이
// ["철수","영희","훈이"].forEach((el) => {}) // forEach 반복은하지만 리턴이 없다. 다시 넣어주지 않는다.

import { useState } from "react";
import { useEffect } from "react";

export default function BasketLoggedInPage() {
  const [basketItems, setBasketItems] = useState([]);

  // useEffect: 컴포넌트가 다 그려지고 난 후에 useEffect가 실행된다.
  useEffect(() => {
    const Items = JSON.parse(localStorage.getItem("baskets")) || []; // 장바구니에 담은 내용이 없을 수도 있으니까 빈배열
    setBasketItems(Items);
  }, []);

  return (
    <>
      <div>비회원으로 담은 장바구니 </div>
      {basketItems.map((el, index) => (
        <div key={el._id}>
          <span style={{ marginRight: "10px" }}>{index}</span>
          <span style={{ marginRight: "10px" }}>{el.writer}</span>
          <span style={{ marginRight: "10px" }}>{el.title}</span>
        </div>
      ))}
    </>
  );
}

import { useState } from "react";

export default function StatePrevPage() {
  const [count, setCount] = useState(0);

  // function onClickButton() {
  //   setCount((prev) => prev + 1);
  //   console.log(count);
  // }

  function onClickButton() {
    setCount((preafdfsv) => {
      const aaa = 33;
      let bbb = 22;
      // 아무로직쓰기 중괄호를 쓰게 되면 아무 변수나 쓸 수 있음 마지막에 리턴만해주면됨
      return preafdfsv + 1;
    });
  }

  return (
    <>
      <div>{count}</div>
      <button onClick={onClickButton}>+1</button>
    </>
  );
}

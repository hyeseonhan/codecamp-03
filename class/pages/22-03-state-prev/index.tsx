import { useState } from "react";

export default function StatePrevPAge() {
  const [count, setCount] = useState(0);

  function onClickButton() {
    setCount((preafdfsv) => {
      const aaa = 33;
      let bbb = 22;
      //아무로직쓰기
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

import { useState } from "react";

export default function QuizStatePrevPage() {
  const [state, setState] = useState(0);

  function onClickButton() {
    setState((qwer) => qwer + 1);
    console.log(state);
  }

  return (
    <>
      <div>{state}</div>
      <button onClick={onClickButton}>+1</button>
    </>
  );
}

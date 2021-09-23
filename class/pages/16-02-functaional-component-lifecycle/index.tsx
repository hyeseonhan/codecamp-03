import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/router";

export default function FunctionalComponentLifecycle() {
  const router = useRouter();
  const [count, setCount] = useState(0);

  // 위에를 이렇게 쓸 수도 있음
  // const [state, setState] = useState({
  //     count: 0
  // })

  const inputRef = useRef<HTMLInputElement>();

  // componentDidMount 와 동일
  useEffect(() => {
    console.log("컴포넌트 마운트 완료!!");
    inputRef.current.focus();

    // componetWillUnmount 와 동일(사라지는 작업을 할 때는 이부분에서)
    return () => {
      console.log("잘가요~~");
    };
  }, []); // [ ] 의존성배열

  // componentDidUpdate 와 동일 ( 100% 일치하지는 않음. 처음에 한번 무조건 실행(console)되는 성격때문에)
  useEffect(() => {
    console.log("컴포넌트 수정 완료!!");
  });

  // setState와 useEffect
  //   useEffect(() => {
  //     setCount((prev) => prev + 1)
  //   }, [])

  // setState와 useEffect의 dependency-array
  //   useEffect(() => {
  //     setCount((prev) => prev + 1);
  //   }, [count]);

  function onClickCount() {
    setCount((prev) => prev + 1);
  }

  function onClickMove() {
    router.push("/"); // 아무페이지나 이동
  }

  return (
    <>
      현재카운트: {count}
      <button onClick={onClickCount}>카운트 증가!!</button>
      <button onClick={onClickMove}>페이지 이동</button>
      <input type="text" ref={inputRef} />
    </>
  );
}

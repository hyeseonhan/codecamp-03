import { useRouter } from "next/router";
import { useState, useEffect, useRef } from "react";

export default function ComponentLifecycle() {
  const router = useRouter();
  const [isChange, setIsChange] = useState(false);

  const inputRef = useRef<HTMLInputElement>();

  useEffect(() => {
    alert("Rendered!");
    inputRef.current.focus();

    return () => {
      alert("bye");
    };
  }, []);

  useEffect(() => {
    alert("Changed!");
  });

  function onClickChange() {
    setIsChange(true);
  }

  function onClickMove() {
    router.push("/");
  }

  return (
    <>
      <button onClick={onClickChange}>[변경]</button>
      <button onClick={onClickMove}>[이동]</button>
      <input type="password" ref={inputRef} />
    </>
  );
}

import MainPageUI from "./main.presenter";
import { useRouter } from "next/router";
import { useState } from "react";

export default function MainPage() {
  const router = useRouter();

  const selectList = [
    { value: "1993", name: "1993" },
    { value: "1994", name: "1994" },
    { value: "1995", name: "1995" },
    { value: "1996", name: "1996" },
  ];

  const [Selected, setSelected] = useState("");
  const onChangehandleSelect = (e) => {
    setSelected(e.target.value);
  };

  function onClickMoveList() {
    router.push("/boards/list");
  }

  return (
    <MainPageUI
      onClickMoveList={onClickMoveList}
      selectList={selectList}
      onChangehandleSelect={onChangehandleSelect}
    />
  );
}

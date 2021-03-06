import axios from "axios";
import { useEffect, useRef, useState } from "react";
import OpenapiListUI from "./OpenapiList.presenter";

export default function OpenapiList() {
  const [search, setSearch] = useState("post malone");
  const [list, setList] = useState();
  const inputRef = useRef<HTMLInputElement>();

  useEffect(() => {
    testFunc();
    console.log("실행");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  const testFunc = async () => {
    if (!search) return;
    const { data } = await axios.get(
      `https://dapi.kakao.com/v2/search/vclip?query=${search}`,
      {
        headers: {
          Authorization: "KakaoAK dd68be79eae4dc32591b7d82a029e75b",
        },
      }
    );
    console.log(data);
    setList(data);
  };

  function onChangeSearch(event) {
    setSearch(inputRef.current.value);
  }

  return (
    <OpenapiListUI
      inputRef={inputRef}
      onChangeSearch={onChangeSearch}
      list={list}
    />
  );
}

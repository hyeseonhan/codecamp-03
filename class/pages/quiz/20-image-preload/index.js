import { useEffect, useRef, useState } from "react";

// preload: 미리 안보이는 곳에서 로딩을 해놓음. 실제로 클릭하면 바로 보여줌
export default function ImagePreload() {
  const divRef = useRef();
  const [imageTag, setImageTag] = useState();

  useEffect(() => {
    // useEffect를 이용해서 사전에 미리 로딩함
    const img = new Image();
    img.src = "https://codebootcamp.co.kr/images/main/homeImage1.webp";
    img.onload = () => {
      setImageTag(img);
    };
  }, []);

  function onClickButton() {
    divRef.current?.appendChild(imageTag);
  }

  return (
    <>
      <div ref={divRef}></div>
      <div onClick={onClickButton}>이미지 보여주기</div>
    </>
  );
}

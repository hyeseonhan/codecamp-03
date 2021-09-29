import { useEffect } from "react";
import { useRef } from "react";

export default function ImagePreloadPage() {
  const [imageTag, setImageTag];
  const divRef = useRef<HTMLDivElement>();

  useEffect(() => {
    const img = new Image();
    img.src = "https://codebootcamp.co.kr/images/main/homeImage1.webp"; //<img src"https://codebootcamp.co.kr/images/main/homeImage1.webp"
    img.onload = () => {
      setImageTag(img);
    };
  }, []);

  function onClickButton() {
    divRef.current?.appendChild(imageTag);
  }

  return (
    <>
      <div ref={}></div>
      <div onClick={onClickButton}>이미지 보여주기</div>
    </>
  );
}

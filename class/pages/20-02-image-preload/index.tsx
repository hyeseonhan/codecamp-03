import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";

// preload: 미리 안보이는 곳에서 로딩 해 놓은거. 실제로 클릭하면 바로 보여줌
export default function ImagePreloadPage() {
  const [imageTag, setImageTag] = useState(); // 8 state 만듬
  const divRef = useRef<HTMLDivElement>(); // 2 divRef: 이름에 불과, div를 참조하겠다

  // 5 여기서 사전에 로딩
  useEffect(() => {
    const img = new Image(); // 6 변수 img를 내장객체(이미만들어진객체) new Image(자바스크립트의 객체)라는
    img.src = "https://codebootcamp.co.kr/images/main/homeImage1.webp"; //<img src"https://codebootcamp.co.kr/images/main/homeImage1.webp" 7 src로 읽히고
    img.onload = () => {
      setImageTag(img);
    };
  }, []);
  // img를 내장객체를 통해서 만듬 -> img.src로 주소가 등록됨
  //     -> 로딩 시작됨 -> img 태그를 state에 잠시 저장둠 ->
  //          8 이 state에 저장한 img 태그를 1 의 div의 자식으로 넣어줄것이다!!!!

  // 4  버튼을 누르면 1 쪽에 이미지가 그려지게끔. 이미지를 사전에 로딩을 해놔야함. 어디서?
  function onClickButton() {
    divRef.current?.appendChild(imageTag); // 8 현재 divRef에서 appendChild는 <div ref={divRef}> 이 태그 안에 자식으로 들어간다는 기능. imageTag는 이미 로딩이 끝남
  }

  return (
    <>
      <div ref={divRef}></div> {/* 1 */}
      <div onClick={onClickButton}>이미지 보여주기</div> {/* 3 */}
    </>
  );
}

// onload: 파일 읽기에 성공하게 되면 onload가 실행. onload에서는 파일을 읽고 생성된 Data URL이 target.result에 담기게 됩니다.
// 페이지속도: https://developers.google.com/speed/pagespeed/insights/
// webp 확장자

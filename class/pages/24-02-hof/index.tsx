export default function HofPage() {
  // 기존 방식
  // function onClickFunciton(event) {
  //   alert(`${event.target.id}번째 입니다.`); //템플릿리터럴
  // }
  // event.target.id = index

  // id를 사용하지 않는 방법으로 hof
  const onClickFunciton2 = (index) => (event) => {
    alert(`${index}번째 입니다.`);
  };

  return (
    <>
      <div>HOF 연습 페이지 입니다.</div>
      {["철수", "영희", "훈이"].map((el, index) => (
        // <div id={String(index)} onClick={onClickFunciton}>
        //   {el}입니다.
        // </div>
        <div key={el} onClick={onClickFunciton2(index)}>
          {el}입니다.
        </div>
      ))}
    </>
  );
}

export default function HofPage() {
  function onClickFunciton(event) {
    alert(`${event.target.id}번째 입니다.`);
  }

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
        <div onClick={onClickFunciton2(index)}>{el}입니다.</div>
      ))}
    </>
  );
}

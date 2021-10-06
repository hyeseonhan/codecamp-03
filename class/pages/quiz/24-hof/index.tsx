export default function QuizHof() {
  //   function onClickWait() {
  //     const Aaa = "123";
  //     console.log(Aaa);
  //   }

  //   return (
  //     <>
  //       <button onClick={onClickWait}>잠깐!</button>
  //     </>
  //   );

  const onClickWait = (index) => (event) => {
    console.log(index);
  };

  return (
    <>
      <button onClick={onClickWait("123")}>잠깐!</button>
    </>
  );
}

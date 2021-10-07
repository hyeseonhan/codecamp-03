import { useForm } from "react-hook-form";

export default function ReactHookForm() {
  const { handleSubmit, register } = useForm();

  function onClickLogin(data) {
    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit(onClickLogin)}>
      <div>25일차 Quiz 리액트 훅</div>
      작성자: <input type="text" {...register("myWriter")} />
      <br />
      비밀번호: <input type="password" {...register("myPassword")} />
      <br />
      제목: <input type="text" {...register("myTitle")} />
      <br />
      내용: <input type="text" {...register("myContents")} />
      <button type="submit">게시물 등록하기</button>
      <br />
    </form>
  );
}

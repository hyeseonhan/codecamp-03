import InputQuiz from "../../commons/inputs/quiz/Input";
import ButtonQuiz from "../../commons/buttons/quiz/Button";

export default function QuizformUI(props) {
  return (
    <form onSubmit={props.handleSubmit(props.onClickLogin)}>
      <div>25일차 Quiz Yup</div>
      작성자: <InputQuiz type="text" register={props.register("myWriter")} />
      <div>{props.formState.errors.myWriter?.message}</div>
      <br />
      비밀번호:
      <InputQuiz type="password" register={props.register("myPassword")} />
      <div>{props.formState.errors.myPassword?.message}</div>
      <br />
      제목: <InputQuiz type="text" register={props.register("myTitle")} />
      <div>{props.formState.errors.myTitle?.message}</div>
      <br />
      내용: <InputQuiz type="text" register={props.register("myContents")} />
      <div>{props.formState.errors.myContents?.message}</div>
      <br />
      <ButtonQuiz
        name="웩게시물등록하기"
        type="submit"
        isValid={props.formState.isValid}
      />
      {/* <MyButton type="submit" isValid={props.formState.isValid}>
        게시물 등록하기
      </MyButton> */}
    </form>
  );
}

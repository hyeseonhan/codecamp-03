import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup"; //

const schema = yup.object().shape({
  myEmail: yup
    .string()
    .email("이메일 형식이 적합하지 않습니다.")
    .required("반드시 입력해야하는 필수 사항입니다."),
  myPassword: yup
    .string()
    .min(4, "비밀번호는 최소 4자리 이상입니다.")
    .max(15, "비밀번호는 최대 15자리까지 입니다")
    .required("비밀번호는 반드시 입력해주세요!"),
});

export default function ReactHookFormYupPage() {
  const { handleSubmit, register, formState } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  function onClickLogin(data) {
    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit(onClickLogin)}>
      <div>리액트 훅 폼 연습!!</div>
      {/* 이름: <input type="text" {...register("myName")} /> */}
      {/* 휴대폰번호: <input type="text" {...register("myPhone")} /> */}
      이메일: <input type="text" {...register("myEmail")} />
      <div>{formState.errors.myEmail?.message}</div>
      <br />
      비밀번호: <input type="password" {...register("myPassword")} />
      <div>{formState.errors.myPassword?.message}</div>
      <br />
      <button type="submit">로그인하기</button>
      {/* <button onClick={onClickLogin} >로그인하기</button> */}
    </form>
  );
}

// import { Button, Input } from "";
// export const Button = styled.button``
// export const Input = styled.input``

// import Aaa123 form ''
// export default function Aaa(){}

// 전체를를 같이 가져올 때는 * as 로

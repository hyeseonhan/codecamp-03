import styled from "@emotion/styled";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const schema = yup.object().shape({
  myWriter: yup.string().max(5, "작성자는 5글자 이내로 작성하세요"),
  myPassword: yup
    .string()
    .max(8, "비밀번호는 8자리 이내로 작성하세요")
    .matches(
      /^(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*]).{1,8}/, // 여덟글자 이내는 ?= 지우고 {} 안에 적어준다.
      // /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{,8})/, 여덝글자 이상
      "비밀번호는 영문, 숫자, 특수문자를 포함한 8자리 이내로 작성하세요"
    ),
  myTitle: yup.string().max(100, "제목은 100자 이내로 작성하세요"),
  myContents: yup.string().max(1000, "내용은 1000자 이내로 작성하세요"),
});

interface IProps {
  isValid: boolean;
}

const MyButton = styled.button`
  background-color: ${(aaa: IProps) => (aaa.isValid ? "yellow" : "green")};
`;

export default function ReactHookFormYup() {
  const { handleSubmit, register, formState } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  function onClickLogin(data) {
    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit(onClickLogin)}>
      <div>25일차 Quiz Yup</div>
      작성자: <input type="text" {...register("myWriter")} />
      <div>{formState.errors.myWriter?.message}</div>
      <br />
      비밀번호: <input type="password" {...register("myPassword")} />
      <div>{formState.errors.myPassword?.message}</div>
      <br />
      제목: <input type="text" {...register("myTitle")} />
      <div>{formState.errors.myTitle?.message}</div>
      <br />
      내용: <input type="text" {...register("myContents")} />
      <div>{formState.errors.myContents?.message}</div>
      <MyButton type="submit" isValid={formState.isValid}>
        게시물 등록하기
      </MyButton>
      <br />
    </form>
  );
}

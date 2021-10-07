import * as yup from "yup";

export const schema = yup.object().shape({
  myWriter: yup
    .string()
    .max(5, "작성자는 5글자 이내로 작성하세요")
    .required("반드시 입력해야하는 필수 사항입니다."),
  myPassword: yup
    .string()
    .max(8, "비밀번호는 8자리 이내로 작성하세요")
    .matches(
      /^(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*]).{1,8}/, // 여덟글자 이내는 ?= 지우고 {} 안에 적어준다.
      // /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{,8})/, 여덝글자 이상
      "비밀번호는 영문, 숫자, 특수문자를 포함한 8자리 이내로 작성하세요"
    )
    .required("반드시 입력해야하는 필수 사항입니다."),
  myTitle: yup
    .string()
    .max(100, "제목은 100자 이내로 작성하세요")
    .required("반드시 입력해야하는 필수 사항입니다."),
  myContents: yup
    .string()
    .max(1000, "내용은 1000자 이내로 작성하세요")
    .required("반드시 입력해야하는 필수 사항입니다."),
});

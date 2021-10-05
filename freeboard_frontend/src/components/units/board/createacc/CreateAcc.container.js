import { useMutation } from "@apollo/client";
import { useState } from "react";
import CreateAccUI from "./CreateAcc.presenter";
import { CREATE_USER } from "./CreateAcc.queries";

export default function CreateAcc() {
  const [createUser] = useMutation(CREATE_USER);

  const [myEmail, setMyEmail] = useState("");
  const [myName, setMyName] = useState("");
  const [myPassword, setMyPassword] = useState("");
  const [myPasswordCheck, setMyPasswordCheck] = useState("");

  const [emailError, setEmailError] = useState("");
  const [nameError, setNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [passwordcheckError, setPasswordCheckError] = useState("");

  function onChangeEmail(event) {
    setMyEmail(event.target.value);
    if (event.target.value !== "") {
      setEmailError("");
    }
  }

  function onChangeName(event) {
    setMyName(event.target.value);
    if (event.target.value !== "") {
      setNameError("");
    }
  }

  function onChangePassword(event) {
    setMyPassword(event.target.value);
    if (event.target.value !== "") {
      setPasswordError("");
    }
  }

  function onChangePasswordCheck(event) {
    setMyPasswordCheck(event.target.value);
    if (event.target.value !== "") {
      setPasswordCheckError("");
    }
  }

  async function onClickCreateAcc() {
    if (myEmail === "") {
      setEmailError("이메일은 필수 입력입니다.");
      return;
    }
    if (/\w+@\w+\.\w+/.test(myEmail) === false) {
      setEmailError("이메일 형식이 아닙니다.");
      return;
    }
    if (myName === "") {
      setNameError("이름은 필수 입력입니다.");
      return;
    }
    if (myPassword === "") {
      setPasswordError("비밀번호는 필수 입력입니다.");
      return;
    }
    if (myPasswordCheck === "") {
      setPasswordCheckError("비밀번호는 필수 입력입니다.");
      return;
    }
    if (myPassword !== myPasswordCheck) {
      setEmailError("비밀번호가 일치하지 않습니다.");
      setPasswordCheckError("비밀번호가 일치하지 않습니다.");
      return;
    }
    try {
      const result = await createUser({
        variables: {
          createUserInput: {
            email: myEmail,
            password: myPassword,
            name: myName,
          },
        },
      });
      alert("회원가입을 축하합니다!");
      console.log(result.data.createUser.email, result.data.createUser._id);
    } catch (error) {
      alert(error.message);
    }
  }

  function onClickBackPage() {}

  return (
    <CreateAccUI
      onChangeEmail={onChangeEmail}
      onChangeName={onChangeName}
      onChangePassword={onChangePassword}
      onChangePasswordCheck={onChangePasswordCheck}
      onClickCreateAcc={onClickCreateAcc}
      onClickBackPage={onClickBackPage}
      emailError={emailError}
      nameError={nameError}
      passwordError={passwordError}
      passwordcheckError={passwordcheckError}
    />
  );
}

import { useState, useContext } from "react";
import { gql, useMutation } from "@apollo/client";
import { GlobalContext } from "../_app";
import { useRouter } from "next/router";

const LOGIN_USER = gql`
  mutation loginUserExample($email: String!, $password: String!) {
    loginUserExample(email: $email, password: $password) {
      accessToken
    }
  }
`;

export default function LoginPage() {
  const router = useRouter();

  const { setAccessToken, accessToken } = useContext(GlobalContext);

  const [myEmail, setMyEmail] = useState("");
  const [myPassword, setMyPassword] = useState("");

  const [loginUserExample] = useMutation(LOGIN_USER);

  function onChangeEmail(event) {
    setMyEmail(event.target.value);
  }

  function onChangePassword(event) {
    setMyPassword(event.target.value);
  }

  // onClick 했을 때  loginUser 실행 -> email, password 사용 -> async, await 로 return을 기다린다.
  async function onClickLogin() {
    const result = await loginUserExample({
      variables: {
        email: myEmail,
        password: myPassword,
      },
    });
    // console.log(result.data?.loginUser.accessToken);
    // localStorage.setItem(
    //   "accessToken",
    //   result.data?.loginUserExample.accessToken
    // );
    localStorage.setItem("refreshToken", "true");
    console.log("token", accessToken);
    console.log(result.data?.loginUserExample.accessToken);
    setAccessToken(result.data?.loginUserExample.accessToken);
    router.push("/32-02-login-success");
  }

  return (
    <>
      이메일: <input type="text" onChange={onChangeEmail} />
      <br />
      비밀번호: <input type="password" onChange={onChangePassword} />
      <br />
      <button onClick={onClickLogin}>로그인하기</button>
    </>
  );
}

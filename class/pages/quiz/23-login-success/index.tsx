import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { GlobalContext } from "../../_app";

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      name
      email
      picture
    }
  }
`;
export default function QuizLoginSuccessPage() {
  const router = useRouter();
  const { setUserInfo, userInfo, setAccessToken, accessToken } =
    useContext(GlobalContext);
  const { data } = useQuery(FETCH_USER_LOGGED_IN);
  //   const [aa,setAa] = useState(false)

  useEffect(() => {
    if (localStorage.getItem("accessToken")) return;
    setUserInfo({
      name: data?.fetchUserLoggedIn.name,
      email: data?.fetchUserLoggedIn.email,
      picture: data?.fetchUserLoggedIn.picture,
    });
    if (!localStorage.getItem("accessToken")) {
      alert("로그인을 먼저 해주세요");
      //   router.push("/quiz/23-login");
    }
  }, [data]);

  console.log(userInfo);
  return (
    <>
      <div>로그인에 성공하셨습니다!</div>
      {data?.fetchUserLoggedIn.name}님 환영합니다~
    </>
  );
}

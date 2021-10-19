import { gql, useQuery } from "@apollo/client";
import { useContext, useEffect } from "react";
// import { useEffect } from "react";
import { GlobalContext } from "../_app";

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      name
      email
      picture
    }
  }
`;

export default function LoginSuccessPage() {
  const { setUserInfo, userInfo, accessToken } = useContext(GlobalContext);

  console.log("aa", accessToken);

  const { data } = useQuery(FETCH_USER_LOGGED_IN);

  useEffect(() => {
    if (userInfo.email) return;
    setUserInfo({
      // 정보 저장
      name: data?.fetchUserLoggedIn.name,
      email: data?.fetchUserLoggedIn.email,
      picture: data?.fetchUserLoggedIn.picture,
    }); // FETCH_USER_LOGGED_IN 하고 나서 GlobalContext에 다 setUserInfo({})를 저장한다는 의미
  }, [data]); // data가 들어오면 실행

  console.log(userInfo);
  return (
    <>
      <div>로그인에 성공하셨습니다!</div>
      {data?.fetchUserLoggedIn.name}님 환영합니다.
    </>
  );
}

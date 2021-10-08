import { useApolloClient, useMutation } from "@apollo/client";

import { useContext } from "react";
import { useForm } from "react-hook-form";
import { gql } from "react-hook-form";
import { GlobalContext } from "../_app";

const LOGIN_USER = gql`
    mutation loginUser(email: String!, $password: String!){
        loginUser(email:$email, password: $password){
            accessToken
        }
    }
`;

const FECTH_USER_LOGGED_IN = gql`
  query fetcchUserLoggedIn {
    fetcchUserLoggedIn {
      email
      name
      picture
    }
  }
`;

export default function UseApolloClientPage() {
  const { setAccessToken, setUserInfo } = useContext(GlobalContext);
  const { handleSubmit, register } = useForm();
  const [loginUser] = useMutation(LOGIN_USER);
  const client = useApolloClient();

  async function onClickLogin(data) {
    // 로그인 처리하기!
    const result = await loginUser({
      variables: {
        email: data.myEmail,
        password: data.myPassWord,
      },
    });
    const accessToken = result.data?.loginUser.AccessToken;

    // const result = await axios.get ("koreajson.com")
    const resultUserInfo = await client.query({
      query: FECTH_USER_LOGGED_IN,
      context: {
        headers: {
          authorization: `Bearer ${accessToken}`,
        },
      },
    });
    const userInfo = resultUserInfo.data.fetchUserLoggedIn;

    setAccessToken(accessToken);
    setUserInfo(userInfo);
  }

  return (
    <>
      {setUserInfo.email ? (
        `{userInfo.name}님 환영합니다.`
      ) : (
        <form onSubmit={handleSubmit(onClickLogin)}>
          이메일: <input type="text" {...register("myEmail")} />
          비밀번호: <input type="text" {...register("myPassword")} />
          <button>로그인하기</button>
          {/* <button type="button" onClick={myOnClickFuction}>
          로그인하기
        </button> */}
        </form>
      )}
    </>
  );
}

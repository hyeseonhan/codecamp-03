import styled from "@emotion/styled";
import { useRouter } from "next/dist/client/router";
import { gql, useMutation, useQuery } from "@apollo/client";
import { useState } from "react";
import { useContext } from "react";
import { GlobalContext } from "../../_app";
import { useEffect } from "react";

const Wrapper = styled.div`
  /* margin: 50px 100px 100px 100px; */
  width: 1200px;
  /* border-top: 7px solid black; */
  padding-top: 80px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  /* padding-right: 20px; */
`;

const LoginWrapper = styled.div`
  border-right: 2px dotted black;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 18px;
`;

const TitleLogin = styled.div`
  margin-bottom: 20px;
  margin-bottom: 25px;
  font-family: "LightBold";
  font-size: 20px;
  font-weight: 800;
`;

const Email = styled.input`
  width: 300px;
  padding-left: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  font-family: "LightBold";
  font-weight: 700;
`;

const Password = styled.input`
  width: 300px;
  padding-left: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  font-family: "LightBold";
  font-weight: 700;
`;

const Signbutton = styled.button`
  width: 300px;
  padding-left: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  font-family: "LightBold";
  font-weight: 700;
  background-color: black;
  color: #f04237;
  cursor: pointer;
`;

const Forgot = styled.div`
  font-family: "LightBold";
  font-weight: 800;
  font-size: 13px;
  cursor: pointer;
`;

const CreatedWrppaer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 35px;
`;

const TitleCreate = styled.div`
  margin-bottom: 17px;
  font-family: "LightBold";
  font-size: 20px;
  font-weight: 800;
`;

const Lyrics = styled.div`
  border: none;
  width: 400px;
  text-align: center;
  font-size: 13px;
  margin-bottom: 20px;
  color: gray;
`;

const CreateAccountbutton = styled.button`
  width: 300px;
  padding-left: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  font-family: "LightBold";
  font-weight: 700;
  background-color: black;
  color: #f04237;
  cursor: pointer;
`;

const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      accessToken
    }
  }
`;

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      name
      email
      picture
    }
  }
`;

export default function LoginPage() {
  const router = useRouter();
  const onClickCreateAccount = (event) => router.push(event.target.id);

  const { setAccessToken, setUserInfo, userInfo } = useContext(GlobalContext);
  // const { setAccessToken } = useContext(GlobalContext);

  const [myEmail, setMyEmail] = useState("");
  const [myPassword, setMyPassword] = useState("");

  const [loginUser] = useMutation(LOGIN_USER);
  const { data } = useQuery(FETCH_USER_LOGGED_IN);

  function onChangeEmail(event) {
    setMyEmail(event.target.value);
  }

  function onChangePassword(event) {
    setMyPassword(event.target.value);
  }

  async function onClickSign() {
    const result = await loginUser({
      variables: {
        email: myEmail,
        password: myPassword,
      },
    });
    console.log(result.data?.loginUser.accessToken);
    localStorage.setItem("accessTokien", result.data?.loginUser.accessToken);
    setAccessToken(result.data?.loginUser.accessToken);
    router.push("/boards/login-success");
  }

  return (
    <Wrapper>
      <LoginWrapper>
        <TitleLogin>LOGIN</TitleLogin>
        <Email
          name="email"
          type="text"
          placeholder="EMAIL"
          onChange={onChangeEmail}
        ></Email>
        <Password
          name="password"
          type="password"
          placeholder="PASSWORD"
          onChange={onChangePassword}
        ></Password>
        <Signbutton onClick={onClickSign}>SIGN IN</Signbutton>
        <Forgot>FORGOT YOUR PASSWORD?</Forgot>
      </LoginWrapper>
      <CreatedWrppaer>
        <TitleCreate>CREATE ACCOUNT</TitleCreate>
        <Lyrics>
          'Cause you make my earth quake Oh, <br />
          you make my earth quake Riding around, you tell me something, baby,
          and it's making my heart break <br />
          'Cause you make my earth quake Oh, you make my earth quake (earth
          quake, yeah) Riding around, your love is shakin' me up and it's making
          my heart break (you already know)
        </Lyrics>
        <CreateAccountbutton
          id="/boards/createacc"
          onClick={onClickCreateAccount}
        >
          CREATE ACCOUNT
        </CreateAccountbutton>
      </CreatedWrppaer>
    </Wrapper>
  );
}

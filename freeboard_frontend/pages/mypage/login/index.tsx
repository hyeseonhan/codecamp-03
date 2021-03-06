/* eslint-disable react/no-unescaped-entities */
import styled from "@emotion/styled";
import { useRouter } from "next/dist/client/router";
import { gql, useMutation } from "@apollo/client";
import { useState } from "react";
import { useContext } from "react";
import { GlobalContext } from "../../_app";
import { breakPoints } from "../../../src/commons/styles/media";

const Wrapper = styled.div`
  width: 1200px;
  padding-top: 80px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  /* padding-right: 20px; */

  @media ${breakPoints.mobile} {
    width: 667px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* background-color: green; */
    padding-top: 0px;
  }

  @media ${breakPoints.phone} {
    width: 375px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* background-color: blue; */
    padding-top: 0px;
  }
`;

const LoginWrapper = styled.div`
  border-right: 2px dotted black;
  padding: 20px 25px 20px 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 18px;

  @media ${breakPoints.mobile} {
    border-right: none;
    padding: 0px;
  }

  @media ${breakPoints.phone} {
    border-right: none;
    padding: 0px;
  }
`;

const TitleLogin = styled.div`
  margin-bottom: 20px;
  margin-bottom: 25px;
  font-family: "LightBold";
  font-size: 20px;
  font-weight: 800;
`;

const Error = styled.div`
  color: #f04237;
  font-size: 10px;
  margin-bottom: 15px;
  /* padding-left: 7px;
  height: 8px; */
`;

const Email = styled.input`
  width: 300px;
  padding-left: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 5px;
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
  margin-bottom: 5px;
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
  :hover {
    background-color: #f04237;
    color: black;
  }
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

  @media ${breakPoints.mobile} {
    border-right: none;
    padding: 20px 0px 0px 0px;
    border-top: 2px dotted black;
  }

  @media ${breakPoints.phone} {
    border-right: none;
    padding: 25px 0px 0px 0px;
    border-top: 2px dotted black;
  }
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

  @media ${breakPoints.phone} {
    width: 373px;
    font-size: 10px;
  }
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
  :hover {
    background-color: #f04237;
    color: black;
  }
`;

const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      accessToken
    }
  }
`;

export default function LoginPage() {
  const router = useRouter();
  const onClickCreateAccount = (event) => router.push(event.target.id);

  /* const { setAccessToken, setUserInfo, userInfo } = useContext(GlobalContext); */
  const { setAccessToken, accessToken } = useContext(GlobalContext);

  const [myEmail, setMyEmail] = useState("");
  const [myPassword, setMyPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [loginUser] = useMutation(LOGIN_USER);
  // const { data } = useQuery(FETCH_USER_LOGGED_IN);

  function onChangeEmail(event) {
    setMyEmail(event.target.value);
    if (
      /^[A-Za-z0-9_.-]+@[A-Za-z0-9-]+\.[A-Za-z0-9-]+/.test(myEmail) === false
    ) {
      setEmailError("????????? ????????? ???????????? ????????????");
    } else {
      setEmailError("");
    }
  }

  function onChangePassword(event) {
    setMyPassword(event.target.value);
    if (myPassword.length < 0) {
      setPasswordError("??????????????? ?????? 1?????? ???????????????.");
    } else {
      setPasswordError("");
    }
  }

  async function onClickSign() {
    if (myEmail === "") {
      setEmailError("???????????????????????????.");
    }
    if (myPassword === "") {
      setPasswordError("???????????????????????????.");
    }
    if (
      /^[A-Za-z0-9_.-]+@[A-Za-z0-9-]+\.[A-Za-z0-9-]+/.test(myEmail) === false &&
      myEmail !== ""
    ) {
      setEmailError("????????? ????????? ???????????? ????????????.");
    }
    if (passwordError.length > 1 && myPassword.length < 0) {
      setPasswordError("??????????????? ?????? 1?????? ???????????????.");
    }
    if (myEmail !== "" && myPassword !== "") {
      try {
        const result = await loginUser({
          variables: {
            email: myEmail,
            password: myPassword,
          },
        });
        // console.log(result.data?.loginUser.accessToken);
        // localStorage.setItem("accessToken", result.data?.loginUser.accessToken);
        localStorage.setItem("refreshToken", "true");
        // console.log("login:", accessToken);
        setAccessToken(result.data?.loginUser.accessToken);
        // location.reload();
        router.push("/mypage/loginfo");
      } catch (error) {
        alert(
          "????????? ?????? ??????????????? ?????? ?????? ???????????????.\n???????????? ??????????????? ????????? ????????? ?????????."
        );
      }
    }
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
        <Error>{emailError}</Error>
        <Password
          name="password"
          type="password"
          placeholder="PASSWORD"
          onChange={onChangePassword}
        ></Password>
        <Error>{passwordError}</Error>
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
          id="/mypage/createacc"
          onClick={onClickCreateAccount}
        >
          CREATE ACCOUNT
        </CreateAccountbutton>
      </CreatedWrppaer>
    </Wrapper>
  );
}

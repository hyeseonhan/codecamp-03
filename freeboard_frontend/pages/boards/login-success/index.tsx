import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { GlobalContext } from "../../_app";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  width: 1200px;

  padding-top: 80px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
`;

const LeftWrapper = styled.div`
  border-right: 2px dotted black;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 18px;
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const State = styled.div``;
const LogoutButton = styled.div``;
const RightWrapper = styled.div``;
const Info = styled.div``;
const Name = styled.div``;
const Email = styled.div``;

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
  const { setUserInfo, userInfo, accessToken } = useContext(GlobalContext);
  const { data } = useQuery(FETCH_USER_LOGGED_IN);

  useEffect(() => {
    if (localStorage.getItem("accessToken")) return;
    setUserInfo({
      name: data?.fetchUserLoggedIn.name,
      email: data?.fetchUserLoggedIn.email,
      picture: data?.fetchUserLoggedIn.picture,
    });
    // if (!localStorage.getItem("accessToken")) {
    //   alert("로그인을 먼저 해주세요");
    //   router.push("/boards/login");
    // }
  }, []);

  console.log(accessToken);

  return (
    <>
      <Wrapper>
        <LeftWrapper>
          <Title>ACCOUNT</Title>
          <State>State</State>
          <LogoutButton>LOG OUT</LogoutButton>
        </LeftWrapper>
        <RightWrapper>
          <Info>Account Information</Info>
          <Name>hyeseon han</Name>
          <Email>h1225hs@gmail</Email>
        </RightWrapper>
      </Wrapper>
    </>
  );
}

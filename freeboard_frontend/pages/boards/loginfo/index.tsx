import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import { withAuth } from "../../../src/components/commons/hocs/withAuth";
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

export default function LogInfoPage() {
  // const router = useRouter();
  const { data } = useQuery(FETCH_USER_LOGGED_IN);

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
          <Name>{data?.fetchUserLoggedIn.name}</Name>
          <Email>{data?.fetchUserLoggedIn.email}l</Email>
        </RightWrapper>
      </Wrapper>
    </>
  );
}

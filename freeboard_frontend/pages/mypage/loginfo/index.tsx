import { gql, useQuery } from "@apollo/client";
import { withAuth } from "../../../src/components/commons/hocs/withAuth";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  /* font-family: "LightBold"; */
  width: 1200px;
  padding-top: 50px;
  padding-left: 270px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;

const LeftWrapper = styled.div`
  width: 450px;
  border-right: 2px dotted black;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  /* align-items: center; */
`;

const Title = styled.div`
  font-weight: 600;
  font-size: 20px;
  padding-bottom: 10px;
`;
const State = styled.div`
  font-weight: 500;
  font-size: 16px;
`;

const StateContent = styled.div`
  width: 400px;
  border: 1px solid red;
  border: none;
  height: 60px;
  font-size: 12px;
`;
const LogoutButton = styled.div`
  border: 1px solid black;
  font-size: 12px;
  font-weight: 600;
  width: 70px;
  padding-top: 2px;
  padding-bottom: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  color: #f04237;
`;

const RightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-left: 30px;
`;
const Info = styled.div`
  font-weight: 600;
  font-size: 20px;
  padding-bottom: 10px;
`;

const InnerWrapper = styled.div`
  padding-left: 18px;
`;

// const Name = styled.div``;

const NameInfo = styled.div`
  font-size: 12px;
  padding-bottom: 10px;
`;

// const Email = styled.div``;

const EmailInfo = styled.div`
  font-size: 12px;
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

// export default function LogInfoPage() {

const LogInfoPage = () => {
  const { data } = useQuery(FETCH_USER_LOGGED_IN);

  return (
    <>
      <Wrapper>
        <LeftWrapper>
          <Title>ACCOUNT</Title>
          <InnerWrapper>
            <State>State</State>
            <StateContent>You have not placed any orders yet.</StateContent>
          </InnerWrapper>

          <LogoutButton>LOG OUT</LogoutButton>
        </LeftWrapper>
        <RightWrapper>
          <Info>Account Information</Info>
          <InnerWrapper>
            <State>Name</State>
            <NameInfo>{data?.fetchUserLoggedIn.name}</NameInfo>
            <State>Email</State>
            <EmailInfo>{data?.fetchUserLoggedIn.email}</EmailInfo>
          </InnerWrapper>
        </RightWrapper>
      </Wrapper>
    </>
  );
};

export default withAuth(LogInfoPage);

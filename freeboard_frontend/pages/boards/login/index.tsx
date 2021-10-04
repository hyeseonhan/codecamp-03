import styled from "@emotion/styled";
import { useRouter } from "next/dist/client/router";

const Wrapper = styled.div`
  /* margin: 50px 100px 100px 100px; */
  width: 1200px;
  border-top: 7px solid black;
  padding-top: 80px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-right: 89px;
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

const Title = styled.div`
  margin-bottom: 20px;
`;

const Email = styled.input`
  margin-bottom: 20px;
`;

const Password = styled.input`
  margin-bottom: 20px;
`;

const Signbutton = styled.button`
  margin-bottom: 20px;
`;

const Forgot = styled.div``;

const CreatedWrppaer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CreateAccountbutton = styled.button`
  margin-bottom: 20px;
`;

export default function LoginPage() {
  const router = useRouter();
  const onClickCreateAccount = (event) => router.push(event.target.id);

  function onClickSign() {}

  return (
    <Wrapper>
      <LoginWrapper>
        <Title>LOGIN</Title>
        <Email name="email" type="text" placeholder="EMAIL"></Email>
        <Password
          name="password"
          type="password"
          placeholder="PASSWORD"
        ></Password>
        <Signbutton onClick={onClickSign}>SIGN IN</Signbutton>
        <Forgot>FORGOT YOUR PASSWORD?</Forgot>
      </LoginWrapper>
      <CreatedWrppaer>
        <Title>CREATE ACCOUNT</Title>
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

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

const Title = styled.div`
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
`;

const Forgot = styled.div`
  font-family: "LightBold";
  font-weight: 800;
  font-size: 13px;
`;

const CreatedWrppaer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 40px;
`;

const Lyrics = styled.div`
  border: none;
  width: 400px;
  text-align: center;
  font-size: 13px;
  margin-bottom: 20px;
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

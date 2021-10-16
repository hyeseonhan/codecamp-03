import {
  Wrapper,
  Title,
  Error,
  Name,
  PasswordCheck,
  Email,
  Password,
  CreateButton,
  BackPage,
} from "./CreateAcc.styles";

export default function CreateAccUI(props) {
  return (
    <>
      <Wrapper>
        <Title>CREATE ACCOUNT</Title>
        <Email
          name="email"
          type="text"
          placeholder="EMAIL"
          onChange={props.onChangeEmail}
        ></Email>
        <Error>{props.emailError}</Error>
        <Name
          name="name"
          type="text"
          placeholder="NAME"
          onChange={props.onChangeName}
        ></Name>
        <Error>{props.nameError}</Error>
        <Password
          name="password"
          type="password"
          placeholder="PASSWORD"
          onChange={props.onChangePassword}
        ></Password>
        <Error>{props.passwordError}</Error>
        <PasswordCheck
          name="passwordcheck"
          type="password"
          placeholder="PASSWORD CHECK"
          onChange={props.onChangePasswordCheck}
        ></PasswordCheck>
        <Error>{props.passwordcheckError}</Error>
        <CreateButton onClick={props.onClickCreateAcc}>CREATE</CreateButton>
        <BackPage id="/mypage/login" onClick={props.onClickBackPage}>
          BACK TO LOGIN
        </BackPage>
      </Wrapper>
    </>
  );
}

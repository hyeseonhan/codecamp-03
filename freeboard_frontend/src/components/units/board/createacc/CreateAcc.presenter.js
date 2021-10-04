import {
  Wrapper,
  Title,
  FirstName,
  LastName,
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
        <FirstName
          name="firstname"
          type="text"
          placeholder="FirstName"
        ></FirstName>
        <LastName name="lastname" type="text" placeholder="LastName"></LastName>
        <Email name="email" type="text" placeholder="EMAIL"></Email>
        <Password
          name="password"
          type="password"
          placeholder="PASSWORD"
        ></Password>
        <CreateButton onClick={props.onClickCreateAcc}>CREATE</CreateButton>
        <BackPage onClick={props.onClickBackPage}>BACK TO LOGIN</BackPage>
      </Wrapper>
    </>
  );
}

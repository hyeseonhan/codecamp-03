import {
  Wrapper,
  LeftWrapper,
  Title,
  InnerLeftWrapper,
  State,
  StateContent,
} from "./myprofile.styles";

export default function MyProfileUI() {
  return (
    <Wrapper>
      <LeftWrapper>
        <Title>ACCOUNT</Title>
        <InnerLeftWrapper>
          <State>CHANGE OF PASSWORD</State>
          <StateContent>You have not placed any orders yet.</StateContent>
        </InnerLeftWrapper>
      </LeftWrapper>
    </Wrapper>
  );
}

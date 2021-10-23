import {
  Wrapper,
  LeftWrapper,
  Title,
  InnerLeftWrapper,
  State,
  StateContent,
} from "./LogInfo.styles";

export default function LogInfoUI() {
  return (
    <Wrapper>
      <LeftWrapper>
        <Title>ACCOUNT</Title>
        <InnerLeftWrapper>
          <State>State</State>
          <StateContent>You have not placed any orders yet.</StateContent>
        </InnerLeftWrapper>
      </LeftWrapper>
    </Wrapper>
  );
}

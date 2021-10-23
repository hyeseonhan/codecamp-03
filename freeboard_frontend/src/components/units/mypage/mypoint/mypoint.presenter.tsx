import {
  Wrapper,
  LeftWrapper,
  Title,
  InnerLeftWrapper,
  State,
  StateContent,
} from "./mypoint.styles";

export default function MyPointUI() {
  return (
    <Wrapper>
      <LeftWrapper>
        <Title>ACCOUNT</Title>
        <InnerLeftWrapper>
          <State>THE FULL HISTORY</State>
          <State>|</State>
          <State>CHARGING DETAILS</State>
          <State>|</State>
          <State>PURCHASE DETAILS</State>
          <State>|</State>
          <State>SALES DETAILS</State>
        </InnerLeftWrapper>
        <StateContent>You have not placed any orders yet.</StateContent>
      </LeftWrapper>
    </Wrapper>
  );
}

import {
  Wrapper,
  Content,
  ButtonWrapper,
  UnderButton,
} from "./LayoutFooter.styles";

export default function LayoutFooterUI(props) {
  return (
    <Wrapper>
      <Content>
        We are passionate about music. To help us share that passion we'd like
        to use cookies and similar technologies to personalize your experiences
        on our sites and to advertise on other sites. For more information and
        additional choices click Cookie Choices below.
      </Content>
      <ButtonWrapper>
        <UnderButton onClick={props.onClickDecline}>Decline All</UnderButton>
        <UnderButton onClick={props.onClickAccept}>Accept All</UnderButton>
        <UnderButton onClick={props.onClickCookie}>Cookie Choices</UnderButton>
      </ButtonWrapper>
    </Wrapper>
  );
}

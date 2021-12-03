/* eslint-disable react/no-unescaped-entities */
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
        Hello, I am Front end Engineer and passionate about coding. The current
        website is my first project. This project is in the form of a bulletin
        board and a used market. The overall concept is to sell used items
        related to my favorite singer or freely write posts. If you are curious
        about me or my other projects, please press the button below.
      </Content>
      <ButtonWrapper>
        <UnderButton onClick={props.onClickGithub}>GITHUB</UnderButton>
        <UnderButton onClick={props.onClickVelog}>VELOG</UnderButton>
        <UnderButton onClick={props.onClickNotion}>RESUME</UnderButton>
      </ButtonWrapper>
    </Wrapper>
  );
}

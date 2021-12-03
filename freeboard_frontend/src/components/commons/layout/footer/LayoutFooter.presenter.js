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
        <a href="https://github.com/hyeseonhan">
          <UnderButton>GITHUB</UnderButton>
        </a>
        <a href="https://velog.io/@h1225hs">
          <UnderButton>VELOG</UnderButton>
        </a>
        <a href="https://geode-pond-981.notion.site/ce46a83fe19a4fc7b462bd50640bf210">
          <UnderButton>RESUME</UnderButton>
        </a>
      </ButtonWrapper>
    </Wrapper>
  );
}

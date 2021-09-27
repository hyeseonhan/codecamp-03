import {
  Wrapper,
  Head,
  Home,
  MainImg,
  Song,
  StreamButton,
  Sub,
  SubWrapper,
  Select,
  EnterButton,
} from "./main.styles";

export default function MainPageUI(props) {
  return (
    <Wrapper>
      {/* <Head>
        <Home src="./images/pm-logo.png" />
      </Head> */}
      <MainImg src="/images/MotleyCrewMain.png" />
      <Song>motley crew</Song>
      <StreamButton href="https://postmalone.lnk.to/motleycrew">
        STREAM / DOWNLOAD
      </StreamButton>
      <Sub>ENTER</Sub>
      <SubWrapper>
        <Select onChange={props.onChangehandleSelect}>
          {props.selectList.map((item) => (
            <option value={item.value} key={item.value}>
              {item.name}
            </option>
          ))}
        </Select>
      </SubWrapper>
      <EnterButton onClick={props.onClickMoveList}>ENTRY</EnterButton>
    </Wrapper>
  );
}

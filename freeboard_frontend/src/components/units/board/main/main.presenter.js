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
      <Head>
        <Home src="./images/pm-logo.png" onClick={props.onClickMoveList} />
      </Head>
      <MainImg src="./images/MotleyCrewMain.png" />
      <Song>motley crew</Song>
      <StreamButton>STREAM / DOWNLOAD</StreamButton>
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
      <EnterButton>ENTRY</EnterButton>
    </Wrapper>
  );
}

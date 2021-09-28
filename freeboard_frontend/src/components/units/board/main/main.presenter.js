import {
  Wrapper,
  Head,
  Home,
  MainImg,
  Song,
  StreamButton,
  Sub,
  SubWrapper,
  SelectYear,
  SelectMonth,
  SelectDate,
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
      <a href="https://postmalone.lnk.to/motleycrew">
        <StreamButton>STREAM / DOWNLOAD</StreamButton>
      </a>
      <Sub>DATE OF BIRTH</Sub>
      <SubWrapper>
        <SelectYear onChange={props.onChangehandleSelect}>
          {props.selectYear.map((item) => (
            <option value={item.value} key={item.value}>
              {item.name}
            </option>
          ))}
        </SelectYear>
        <SelectMonth>
          {props.selectMonth.map((item) => (
            <option value={item.value} key={item.value}>
              {item.name}
            </option>
          ))}
        </SelectMonth>
        <SelectDate>
          {props.selectDate.map((item) => (
            <option value={item.value} key={item.value}>
              {item.name}
            </option>
          ))}
        </SelectDate>
      </SubWrapper>
      <EnterButton onClick={props.onClickMoveList}>ENTRY</EnterButton>
    </Wrapper>
  );
}

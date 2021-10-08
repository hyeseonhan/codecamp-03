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
  SliderWrapper,
  SliderAlbum,
} from "./main.styles";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  // dots: true,
  autoplay: true,
  infinite: true,
  speed: 2000,
  slidesToShow: 1,
  slidesToScroll: 1,
  // centerMode: true,
  autoplaySpeed: 100,
  // innerWidth: 400,
  arrows: false,
};

export default function MainPageUI(props) {
  return (
    <Wrapper>
      {/* <Head>
        <Home src="./images/pm-logo.png" />
      </Head> */}
      {/* <MainImg src="/images/MotleyCrewMain.png" /> */}
      <SliderWrapper>
        <Slider {...settings}>
          <div>
            <SliderAlbum src="/images/motleycrew.png" />
          </div>
          <div>
            <SliderAlbum src="/images/bleeding.png" />
          </div>
          <div>
            <SliderAlbum src="/images/goodbyes.png" />
          </div>
          <div>
            <SliderAlbum src="/images/congra.png" />
          </div>
        </Slider>
      </SliderWrapper>
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

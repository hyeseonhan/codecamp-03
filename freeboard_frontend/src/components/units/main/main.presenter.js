import {
  Wrapper,
  Song,
  StreamButton,
  Sub,
  SubWrapper,
  Select,
  EnterButton,
  SliderWrapper,
  SliderAlbum,
} from "./main.styles";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  dots: false,
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
      <SliderWrapper>
        <Slider {...settings}>
          <div>
            <SliderAlbum src="/images/onerightnow.webp" />
          </div>
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
      <Song>one right now</Song>
      <a href="https://music.apple.com/us/album/1593056776?ign-itscg=30440&ign-itsct=catchall_p1">
        <StreamButton>STREAM / DOWNLOAD</StreamButton>
      </a>
      <Sub>DATE OF BIRTH</Sub>
      <SubWrapper>
        <Select onChange={props.onChangehandleSelect}>
          {props.selectYear.map((item) => (
            <option value={item.value} key={item.value}>
              {item.name}
            </option>
          ))}
        </Select>
        <Select>
          {props.selectMonth.map((item) => (
            <option value={item.value} key={item.value}>
              {item.name}
            </option>
          ))}
        </Select>
        <Select>
          {props.selectDate.map((item) => (
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

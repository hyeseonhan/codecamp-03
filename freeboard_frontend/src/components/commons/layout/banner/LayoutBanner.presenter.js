import { Wrapper, SliderWrapper, H3 } from "./LayoutBanner.styles";
import Slider from "react-slick";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function LayoutBannerUI() {
  return (
    <>
      <SliderWrapper>
        <Wrapper>Banner</Wrapper>
        <Slider {...settings}>
          <div>
            <H3>1</H3>
          </div>
          <div>
            <H3>2</H3>
          </div>
          <div>
            <H3>3</H3>
          </div>
          <div>
            <H3>4</H3>
          </div>
          <div>
            <H3>5</H3>
          </div>
          <div>
            <H3>6</H3>
          </div>
        </Slider>
      </SliderWrapper>
    </>
  );
}

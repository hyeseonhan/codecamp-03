import { SliderWrapper, SliderItem, SliderAlbum } from "./LayoutBanner.styles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  // dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  // centerMode: true,
  autoplaySpeed: 3000,
};

export default function LayoutBannerUI() {
  return (
    <>
      <SliderWrapper>
        {/* <Wrapper>Banner</Wrapper> */}
        <Slider {...settings}>
          <div>
            <SliderItem src="./images/albumname.png" />
          </div>
          <div>
            <SliderAlbum src="./images/motleycrew.png" />
          </div>
          <div>
            <SliderAlbum src="./images/bleeding.png" />
          </div>
          <div>
            <SliderAlbum src="./images/goodbyes.png" />
          </div>
          <div>
            <SliderAlbum src="./images/beerbongs.png" />
          </div>
          <div>
            <SliderAlbum src="./images/congra.png" />
          </div>
        </Slider>
      </SliderWrapper>
    </>
  );
}

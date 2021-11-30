import styled from "@emotion/styled";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  .paging_items {
    filter: grayscale(1);
    &:hover {
      filter: none;
    }
  }
  .slick-current .paging_items {
    filter: none;
  }
`;

const SliderItem = styled.img`
  height: 300px;
  width: 300px;
`;

const UnderSliderItem = styled.img`
  width: 50px;
  height: 50px;
  border: 1px solid red;
`;

const MySlider = styled(Slider)`
  .slick-list {
    width: 370px;
    /* margin: auto; */
    border: 1px solid blue;
  }
  .slick-slide img {
    margin: auto;
  }

  .slick-dots {
    right: 10px;
    left: 1px;
    .slick-active {
      button::before {
        color: gray;
      }
    }
    button::before {
      color: gray;
    }
  }
  .slick-prev:before,
  .slick-next:before {
    color: gray;
    font-size: 40px;
  }
`;

const UnderSlider = styled(Slider)`
  margin-top: 40px;
  .slick-list {
    width: 230px;
    margin: auto;
  }
  .slick-slide img {
    margin: auto;
  }

  .slick-prev:before,
  .slick-next:before {
    color: gray;
    font-size: 40px;
  }
`;

export default function Carousel01(props: any) {
  const [mainSlick, setMainSlick] = useState(null);
  const [pagingSlick, setPagingSlick] = useState(null);
  const mainSlickRef = useRef(null);
  const pagingSlickRef = useRef(null);

  useEffect(() => {
    setMainSlick(mainSlickRef.current);
    setPagingSlick(pagingSlickRef.current);
  }, []);

  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
  };

  const pagingsettings = {
    dots: false,
    arrow: false,
    infinite: true,
    centerMode: true,
    slidesToShow: 2,
    focusOnSelect: true,
  };

  return (
    <Wrapper>
      <MySlider ref={mainSlickRef} asNavFor={pagingSlick} {...settings}>
        {props.data?.fetchUseditem.images
          ?.filter((el: any) => el !== "")
          .map((el: any) => (
            <div key={el}>
              <SliderItem src={`https://storage.googleapis.com/${el}`} />
            </div>
          ))}
      </MySlider>
      <UnderSlider
        ref={pagingSlickRef}
        asNavFor={mainSlick}
        {...pagingsettings}
      >
        {props.data?.fetchUseditem.images
          ?.filter((el: any) => el)
          .map((el: any) => (
            <div key={el}>
              <UnderSliderItem src={`https://storage.googleapis.com/${el}`} />
            </div>
          ))}
      </UnderSlider>
    </Wrapper>
  );
}

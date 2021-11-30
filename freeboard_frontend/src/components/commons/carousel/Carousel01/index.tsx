import styled from "@emotion/styled";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Wrapper = styled.div`
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
  height: 360px;
  width: 360px;
`;

const MySlider = styled(Slider)`
  .slick-list {
    width: 370px;
    height: 360px;
    /* margin: auto; */
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

export default function Carousel01(props: any) {
  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
  };

  return (
    <Wrapper>
      <MySlider
        ref={props.mainSlickRef}
        asNavFor={props.pagingSlick}
        {...settings}
      >
        {props.data?.fetchUseditem.images
          ?.filter((el: any) => el !== "")
          .map((el: any) => (
            <div key={el}>
              <SliderItem src={`https://storage.googleapis.com/${el}`} />
            </div>
          ))}
      </MySlider>
    </Wrapper>
  );
}

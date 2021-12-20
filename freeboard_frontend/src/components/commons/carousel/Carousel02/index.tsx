import styled from "@emotion/styled";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { breakPoints } from "../../../../commons/styles/media";

const Wrapper = styled.div`
  /* width: 200px;
  display: flex;
  flex-direction: row; */

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

const UnderSliderItem = styled.img`
  width: 50px;
  height: 50px;
  /* border: 1px solid red; */
`;

const UnderSlider = styled(Slider)`
  .slick-list {
    width: 120px;
    height: 50px;
    display: flex;
    flex-direction: row;
  }
  .slick-slide img {
  }

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

export default function Carousel02(props: any) {
  const pagingsettings = {
    dots: false,
    arrow: false,
    infinite: true,
    slidesToShow: 2,
    focusOnSelect: true,
  };

  return (
    <Wrapper>
      <UnderSlider
        ref={props.pagingSlickRef}
        asNavFor={props.mainSlick}
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

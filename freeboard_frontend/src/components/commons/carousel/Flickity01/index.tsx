import styled from "@emotion/styled";
import flickity from "react-flickity-component";

const flickityOptions = {
  initialIndex: 1,
  draggable: true,
  freeScroll: false,
  lazyLoad: 2,
  contain: true,
  wrapAround: true,
};

const Flickity = styled(flickity)`
  .flickity-viewport {
    border-radius: 50%;
    overflow: hidden;
    width: 500px;
    height: 500px;
    /* height: 200px !important; */
  }

  .flickity-slider {
    width: 500px;
    height: 500px;
  
  }
}

  .flickity-enabled {
    position: relative;
  }

  .flickity-enabled:focus {
    outline: none;
  }

  .flickity-viewport {
     overflow: hidden;
    position: relative;
    height: 100%; 
  } 

  .flickity-slider {
    position: absolute;
    width: 100%;
    height: 100%;
  }

  /* draggable */

  .flickity-enabled.is-draggable {
    -webkit-tap-highlight-color: transparent;
    /* -tap-highlight-color: transparent; */
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .flickity-enabled.is-draggable .flickity-viewport {
    cursor: move;
    cursor: -webkit-grab;
    cursor: grab;
  }

  .flickity-enabled.is-draggable .flickity-viewport.is-pointer-down {
    cursor: -webkit-grabbing;
    cursor: grabbing;
  }

  /* ---- flickity-button ---- */

  .flickity-button {
    position: absolute;
    background: hsla(0, 0%, 100%, 0.75);
    border: none;
    color: #333;
    display: none;
  }

  .flickity-button:hover {
    background: white;
    cursor: pointer;
  }

  .flickity-button:focus {
    /* outline: none; */
    box-shadow: 0 0 0 5px #19f;
  }

  .flickity-button:active {
    opacity: 0.6;
  }

  .flickity-button:disabled {
    opacity: 0.3;
    cursor: auto;
    /* prevent disabled button from capturing pointer up event. #716 */
    pointer-events: none;
  }

  .flickity-button-icon {
    fill: #333;
  }

  /* ---- previous/next buttons ---- */

  .flickity-prev-next-button {
    top: 50%;
    width: 44px;
    height: 44px;
    border-radius: 50%;
    /* vertically center */
    transform: translateY(-50%);
  }

  .flickity-prev-next-button.previous {
    left: 10px;
  }
  .flickity-prev-next-button.next {
    right: 10px;
  }
  /* right to left */
  .flickity-rtl .flickity-prev-next-button.previous {
    left: auto;
    right: 10px;
  }
  .flickity-rtl .flickity-prev-next-button.next {
    right: auto;
    left: 10px;
  }

  .flickity-prev-next-button .flickity-button-icon {
    position: absolute;
    left: 20%;
    top: 20%;
    width: 60%;
    height: 60%;
  }

  /* ---- page dots ---- */

  .flickity-page-dots {
    position: absolute;
    width: 100%;
    bottom: -25px;
    padding: 0;
    margin: 0;
    list-style: none;
    text-align: center;
    line-height: 1;
  }

  .flickity-rtl .flickity-page-dots {
    direction: rtl;
  }

  .flickity-page-dots .dot {
    display: inline-block;
    width: 10px;
    height: 10px;
    margin: 0 8px;
    background: #333;
    border-radius: 50%;
    opacity: 0.25;
    cursor: pointer;
  }


  .flickity-page-dots .dot.is-selected {
    opacity: 1;
  }
`;

const Wrapper = styled.div`
  /* border: 1px solid black; */
  padding-top: 50px;
  padding-bottom: 100px;
`;

const Img = styled.img`
  width: 500px;
  height: 500px;
  border-radius: 50%;
`;

export default function Flickity01(props) {
  return (
    <Wrapper>
      <Flickity
        className={"carousel"} // default ''
        elementType={"div"} // default 'div'
        options={flickityOptions} // takes flickity options {}
        disableImagesLoaded={false} // default false
        reloadOnUpdate // default false
        static // default false
      >
        {props.dataBoardsOfTheBest?.fetchBoardsOfTheBest.map((el) => (
          <div key={el._id}>
            {el?.images[0] && (
              <Img src={`https://storage.googleapis.com/${el?.images[0]}`} />
            )}
          </div>
        ))}
        {props.dataMarketsOfTheBest?.fetchUseditemsOfTheBest?.map((el) => (
          <div key={el._id}>
            {el?.images[0] && (
              <Img src={`https://storage.googleapis.com/${el?.images[0]}`} />
            )}
          </div>
        ))}

        {/* <div>
          <Img src="/images/chairs.jpg" />
        </div>
        <div>
          <Img src="/images/poolblue.jpg" />
        </div>
        <div>
          <Img src="/images/postybangs.png" />
        </div>
        <div>
          <Img src="/images/pool.jpg" />
        </div>
        <div>
          <Img src="/images/building.jpg" />
        </div> */}
      </Flickity>
    </Wrapper>
  );
}

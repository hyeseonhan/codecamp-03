import { gql, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import flickity from "react-flickity-component";

const FETCH_BOARDS_OF_THE_BEST = gql`
  query fetchBoardsOfTheBest {
    fetchBoardsOfTheBest {
      images
      _id
    }
  }
`;

const FETCH_USED_ITEMS_OF_THE_BEST = gql`
  query {
    fetchUseditemsOfTheBest {
      _id
      images
    }
  }
`;

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
  }}

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
`;

const Img = styled.img`
  width: 500px;
  height: 500px;
  border-radius: 50%;
`;

const InnerWarpper = styled.div``;

export default function Flickity01() {
  const { data: dataBoardsOfTheBest } = useQuery(FETCH_BOARDS_OF_THE_BEST);
  const { data: dataMarketsOfTheBest } = useQuery(FETCH_USED_ITEMS_OF_THE_BEST);

  const BestBoards = dataBoardsOfTheBest?.fetchBoardsOfTheBest?.map(
    (el: any) =>
      el?.images[0] && `https://storage.googleapis.com/${el.images[0]}`
  );

  const bb = Object.assign({}, BestBoards);
  const bbb = Object.values(bb);

  // console.log("bbb", bbb);

  const BestMarkets = dataMarketsOfTheBest?.fetchUseditemsOfTheBest?.map(
    (el: any) =>
      el?.images[0] && `https://storage.googleapis.com/${el.images[0]}`
  );

  const cc = Object.assign({}, BestMarkets);
  const ccc = Object.values(cc);

  // console.log("ccc", ccc);

  // var obj3 = {...obj1, ...obj2};
  const BestData = [...bbb, ...ccc];

  console.log("BestData", BestData);

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
        {/* {BestData?.filter((el) => el).map((el: any) => {
            <InnerWarpper key={el}>
              <Img src={`${el}`} />
            </InnerWarpper>;
          })} */}
        <InnerWarpper>
          <Img src={`${BestData?.[0]}`} />
        </InnerWarpper>
        <InnerWarpper>
          <Img src={`${BestData?.[1]}`} />
        </InnerWarpper>
        <InnerWarpper>
          <Img src={`${BestData?.[2]}`} />
        </InnerWarpper>
        <InnerWarpper>
          <Img src={`${BestData?.[3]}`} />
        </InnerWarpper>
        <InnerWarpper>
          <Img src={`${BestData?.[4]}`} />
        </InnerWarpper>
        <InnerWarpper>
          <Img src={`${BestData?.[5]}`} />
        </InnerWarpper>
        <InnerWarpper>
          <Img src={`${BestData?.[6]}`} />
        </InnerWarpper>
        <InnerWarpper>
          <Img src={`${BestData?.[7]}`} />
        </InnerWarpper>
      </Flickity>
    </Wrapper>
  );
}

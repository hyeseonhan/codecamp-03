import dynamic from "next/dynamic";
// import "../styles.css";
import styled from "@emotion/styled";
const Flickity = dynamic(() => import("react-flickity-component"));

const flickityOptions = {
  initialIndex: 2,
};

const Wrapper = styled.div`
  width: 500x;
  height: 1000px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Img = styled.div``;

// function Carousel() {}

export default function Carousel() {
  return (
    <>
      {/* <Flickity {...Carousel}>
        <div>
          <Img src="/images/beerbongs.png" />
        </div>
        <div>
          <Img src="/images/congra.png" />
        </div>
        <div>
          <Img src="/images/bleeding.png" />
        </div>
      </Flickity> */}
      <Flickity
        className={"carousel"} // default ''
        elementType={"div"} // default 'div'
        options={flickityOptions} // takes flickity options {}
        disableImagesLoaded={false} // default false
        reloadOnUpdate // default false
        static // default false
      >
        <Img src="/images/bleeding.png" />
        <Img src="/images/bleeding.png" />
        <Img src="/images/bleeding.png" />
      </Flickity>
      {/* </Wrapper> */}
    </>
  );
}

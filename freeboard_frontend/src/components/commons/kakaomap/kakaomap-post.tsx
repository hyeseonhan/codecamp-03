import styled from "@emotion/styled";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../../../../pages/_app";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;
`;

const LocationWrapper = styled.div`
  margin-right: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Map = styled.div``;

const TitleName = styled.div`
  margin-bottom: 16px;
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  line-height: 23.68px;
`;

const MapInfoWrapper = styled.div``;

const GpsWrapper = styled.div`
  margin-bottom: 40px;
`;

const GpsInnerWrapper = styled.div``;

const Lat = styled.input`
  width: 175px;
  height: 52px;
  margin-right: 21px;
  padding-left: 10px;
`;

const GpsIcon = styled.img`
  /* width: 14px;
  height: 20px; */
  margin-right: 21px;
`;

const Lng = styled.input`
  width: 175px;
  height: 52px;
  padding-left: 10px;
`;

const AddressWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* border: 1px solid red; */
  height: 120px;
`;

const Address = styled.input`
  width: 588px;
  height: 52px;
  padding-left: 10px;
`;

declare const window: typeof globalThis & {
  kakao: any;
};

export default function KakaoMapPost(props) {
  const { setLat, setLng, lat, lng, setLocation, location } =
    useContext(GlobalContext);

  useEffect(() => {
    const script = document.createElement("script"); // script 태그를 만든다.
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?appkey=5c3f3b5fa1a016d4a491f6dc430152fe&autoload=false&libraries=services";
    document.head.appendChild(script); // appendChild 자식으로 추가
    script.onload = () => {
      window.kakao.maps.load(function () {
        window.setTimeout(() => {
          const container = document.getElementById("map"); // 지도를 담을 영역의 DOM 레퍼런스
          const options = {
            // 지도를 생성할 때 필요한 기본 옵션
            center: new window.kakao.maps.LatLng(
              37.51719553992789,
              126.95962070083127
            ), // 지도의 중심좌표.
            level: 3, // 지도의 레벨(확대, 축소 정도)
          };

          const map = new window.kakao.maps.Map(container, options); // 지도 생성 및 객체 리턴
          console.log(map);

          // 지도를 클릭한 위치에 표출할 마커입니다
          const marker = new window.kakao.maps.Marker({
            // 지도 중심좌표에 마커를 생성합니다
            position: map.getCenter(),
          });

          console.log(window.kakao.maps);
          // 중요!
          const geocoder = new window.kakao.maps.services.Geocoder();
          // console.log(geocoder);

          const coord = new window.kakao.maps.LatLng(lat, lng);
          console.log("2번", coord);

          const test = function (coords, callback) {
            geocoder.coord2Address(coords.getLng(), coords.getLat(), callback);
          };

          // 지도에 마커를 표시합니다
          marker.setMap(map);

          // 지도에 클릭 이벤트를 등록합니다
          // 지도를 클릭하면 마지막 파라미터로 넘어온 함수를 호출합니다
          window.kakao.maps.event.addListener(
            map,
            "click",
            function (mouseEvent: { latLng: any }) {
              test(mouseEvent.latLng, function (result, status) {
                if (status === window.kakao.maps.services.Status.OK) {
                  setLocation(result[0].address.address_name);
                }
              });
              // 클릭한 위도, 경도 정보를 가져옵니다
              const latlng = mouseEvent.latLng;

              // 마커 위치를 클릭한 위치로 옮깁니다
              marker.setPosition(latlng);

              // const message =
              //   "클릭한 위치의 위도는 " + latlng.getLat() + " 이고, ";
              // message += "경도는 " + latlng.getLng() + " 입니다";
              setLat(latlng.getLat());
              setLng(latlng.getLng());

              console.log("aabdsdf", window.kakao.maps);
              console.log("234234", location);
              console.log("jhg", lat);
            }
          );
        }, 200);
      });
    };
  }, []);

  return (
    <>
      <Wrapper>
        <LocationWrapper>
          <TitleName>거래위치</TitleName>
          <Map id="map" style={{ width: "384px", height: "252px" }}></Map>
        </LocationWrapper>
        <MapInfoWrapper>
          <GpsWrapper>
            <TitleName>GPS</TitleName>
            <GpsInnerWrapper>
              <Lat value={lat} readOnly />
              <GpsIcon src="/images/location.png" />
              <Lng value={lng} readOnly />
            </GpsInnerWrapper>
          </GpsWrapper>
          <TitleName>주소</TitleName>
          <AddressWrapper>
            <Address value={location} readOnly />
            <Address onChange={props.onChangeAddressDetail} />
          </AddressWrapper>
        </MapInfoWrapper>
      </Wrapper>
    </>
  );
}

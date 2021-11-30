import { useEffect } from "react";
import styled from "@emotion/styled";

const MapWrapper = styled.div`
  /* width: 792px; */
  display: flex;
  justify-content: center;
`;

declare const window: typeof globalThis & {
  kakao: any;
};

export default function KakaoMapDetail(props) {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=5c3f3b5fa1a016d4a491f6dc430152fe";
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(function () {
        const container = document.getElementById("map");
        const options = {
          center: new window.kakao.maps.LatLng(
            props.data?.fetchUseditem.useditemAddress?.lat || 37.51719553992789,
            props.data?.fetchUseditem.useditemAddress?.lng || 126.95962070083127
          ),
          level: 4,
        };
        const map = new window.kakao.maps.Map(container, options);
        // console.log("kakaomap-detail:", map);

        const marker = new window.kakao.maps.Marker({
          // 지도 중심좌표에 마커를 생성합니다
          position: map.getCenter(),
        });
        // 지도에 마커를 표시합니다
        marker.setMap(map);
      });
    };
  }, [
    props.data?.fetchUseditem.useditemAddress?.lat,
    props.data?.fetchUseditem.useditemAddress?.lng,
  ]);

  return (
    <>
      <MapWrapper>
        <div id="map" style={{ width: "592px", height: "260px" }}></div>
      </MapWrapper>
    </>
  );
}

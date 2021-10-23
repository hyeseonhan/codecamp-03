import MySideBarUI from "./MySideBar.presenter";
import { useQuery } from "@apollo/client";
import { FETCH_USER_LOGGED_IN } from "./MySideBar.queries";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../../../../../pages/_app";
import { withAuth } from "../../../commons/hocs/withAuth";
import { useRouter } from "next/router";

const MySideBar = () => {
  const router = useRouter();
  const { setUserInfo, userInfo, accessToken } = useContext(GlobalContext);
  console.log("aaa:", accessToken);

  const { data } = useQuery(FETCH_USER_LOGGED_IN);

  useEffect(() => {
    if (userInfo.email) return;
    setUserInfo({
      name: data?.fetchUserLoggedIn.name,
      email: data?.fetchUserLoggedIn.email,
      picture: data?.fetchUserLoggedIn.picture,
      // userPoint: data?.fetchUserLoggedIn.usePoint,
    });
  }, [data]);

  console.log("loginfo:", userInfo);

  function onClickMovetoMyMarket() {
    router.push("/mypage/mymarket");
  }

  function onClickMovetoMyPoint() {
    router.push("/mypage/mypoint");
  }

  function onClickMovetoMyProfile() {
    router.push("/mypage/myprofile");
  }

  return (
    <MySideBarUI
      data={data}
      onClickMovetoMyMarket={onClickMovetoMyMarket}
      onClickMovetoMyPoint={onClickMovetoMyPoint}
      onClickMovetoMyProfile={onClickMovetoMyProfile}
    />
  );
};

export default withAuth(MySideBar);

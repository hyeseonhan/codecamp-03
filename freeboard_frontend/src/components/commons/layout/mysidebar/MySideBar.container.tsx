import MySideBarUI from "./MySideBar.presenter";
import { useQuery } from "@apollo/client";
import { FETCH_USER_LOGGED_IN } from "./MySideBar.queries";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../../../../../pages/_app";
import { withAuth } from "../../../commons/hocs/withAuth";
import { useRouter } from "next/router";
import { useState } from "react";

const MySideBar = () => {
  const router = useRouter();
  const { setUserInfo, userInfo, accessToken } = useContext(GlobalContext);
  console.log("aaa:", accessToken);

  // const [point, setPoint] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);

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

  function onToggleOpenPointCharge() {
    setIsOpenModal((prev) => !prev);
  }

  return (
    <MySideBarUI
      data={data}
      onClickMovetoMyMarket={onClickMovetoMyMarket}
      onClickMovetoMyPoint={onClickMovetoMyPoint}
      onClickMovetoMyProfile={onClickMovetoMyProfile}
      onToggleOpenPointCharge={onToggleOpenPointCharge}
      isOpenModal={isOpenModal}
    />
  );
};

export default withAuth(MySideBar);

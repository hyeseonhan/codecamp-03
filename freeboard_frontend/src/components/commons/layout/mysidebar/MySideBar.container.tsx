import MySideBarUI from "./MySideBar.presenter";
import { useQuery } from "@apollo/client";
import { FETCH_USER_LOGGED_IN } from "./MySideBar.queries";
import { withAuth } from "../../../commons/hocs/withAuth";
import { useRouter } from "next/router";
import { useState } from "react";

const MySideBar = () => {
  const router = useRouter();

  const [isOpenModal, setIsOpenModal] = useState(false);

  const { data } = useQuery(FETCH_USER_LOGGED_IN);

  function onClickLogout() {
    localStorage.removeItem("refreshToken");
    alert("로그아웃이 되었습니다.");
    router.push("/mypage/login");
  }

  function onClickMovetoMyMarket() {
    router.push("/mypage/mymarket");
    // console.log(userInfo);
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
      onClickLogout={onClickLogout}
    />
  );
};

export default withAuth(MySideBar);

import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../../../../pages/_app";
import LayoutNaviUI from "./LayoutNavi.presenter";
import { FETCH_USER_LOGGED_IN, LOGIN_USER } from "./LayoutNavi.queries";
// import { withAuth } from "../../hocs/withAuth";

// const LayoutNavi = () => {

export default function LayoutNavi() {
  const router = useRouter();
  const onClickMenu = (event) => router.push(event.target.id);
  const { accessToken } = useContext(GlobalContext);
  // const { data } = useQuery(FETCH_USER_LOGGED_IN);

  // useEffect(() => {
  //   setUserInfo({
  //     name: data?.fetchUserLoggedIn.name,
  //     email: data?.fetchUserLoggedIn.email,
  //     picture: data?.fetchUserLoggedIn.picture,
  //   });
  // }, []);

  function onClickLogin() {
    // setIsChange((prev) => !prev);
    if (!accessToken) {
      router.push("/mypage/login");
    } else {
      router.push("/mypage/loginfo");
    }
  }

  return (
    <LayoutNaviUI
      onClickMenu={onClickMenu}
      onClickLogin={onClickLogin}
      accessToken={accessToken}
    />
  );
}

// export default withAuth(LayoutNavi);

/* eslint-disable react/display-name */
import { useRouter } from "next/router";
import { useEffect } from "react";

export const withAuth = (Component) => (props) => {
  const router = useRouter();

  useEffect(() => {
    const accessToken = localStorage.getItem("refreshToken");
    console.log("withAuth", accessToken);
    if (!accessToken) {
      alert("로그인을 먼저 해주세요");
      router.push("./mypage/login");
    }
  }, []);
  return <Component {...props} />;
};

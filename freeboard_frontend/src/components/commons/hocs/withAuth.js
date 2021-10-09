import { useRouter } from "next/router";
import { useEffect } from "react";

export const withAuth = (Component) => (props) => {
  const router = useRouter();

  useEffect(() => {
    const accessTokenItem = window.localStorage.getItem("accessToken");
    console.log("withAuth", accessTokenItem);
    if (!accessTokenItem) {
      alert("로그인을 먼저 해주세요");
      router.push("./login");
    }
  }, []);

  return <Component {...props} />;
};

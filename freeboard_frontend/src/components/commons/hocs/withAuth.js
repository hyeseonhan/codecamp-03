import { useRouter } from "next/router";
import { useContext } from "react";
import { useEffect } from "react";
import { GlobalContext } from "../../../../pages/_app";

export const withAuth = (Component) => (props) => {
  const router = useRouter();
  const { accessToken } = useContext(GlobalContext);

  // useEffect(() => {
  //   const accessToken = localStorage.getItem("accessToken");
  //   console.log("withAuth", accessToken);
  //   if (!accessToken) {
  //     alert("로그인을 먼저 해주세요");
  //     router.push("./loginfo");
  //   }
  // }, []);

  useEffect(() => {
    if (!localStorage.getItem("accessToken")) {
      alert("로그인을 먼저 해주세요");
      router.push("./loginfo");
    }
  }, [accessToken]);

  return <Component {...props} />;
};

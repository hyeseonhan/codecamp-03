import { useRouter } from "next/router";
import { useContext } from "react";
import { useEffect } from "react";
import { GlobalContext } from "../../../../pages/_app";

export const quizwithAuth = (Component) => (props) => {
  const router = useRouter();
  const { accessToken } = useContext(GlobalContext);

  useEffect(() => {
    if (!localStorage.getItem("accessToken")) {
      alert("로그인 유저만 가능합니다.");
      router.push("./24-login");
    }
  }, [accessToken]);

  return <Component {...props} />;
};

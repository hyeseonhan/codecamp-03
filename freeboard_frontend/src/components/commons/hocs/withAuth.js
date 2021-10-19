import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../../../../pages/_app";

export const withAuth = (Component) => (props) => {
  const router = useRouter();
  const { accessToken } = useContext(GlobalContext);

  useEffect(() => {
    const accessToken = localStorage.getItem("refreshToken");
    console.log("withAuth", accessToken);
    if (!accessToken) {
      alert("로그인을 먼저 해주세요");
      router.push("./login");
    }
  }, []);

  return <Component {...props} />;
};

// 왜 useContext를 안사용했지..?
// export const withAuth = (Component) => (props) => {
//   const router = useRouter();

//   useEffect(() => {
//     const accessTokenItem = window.localStorage.getItem("accessToken");
//     console.log("withAuth", accessTokenItem);
//     if (!accessTokenItem) {
//       alert("로그인을 먼저 해주세요");
//       router.push("./login");
//     }
//   }, []);

//   return <Component {...props} />;
// };

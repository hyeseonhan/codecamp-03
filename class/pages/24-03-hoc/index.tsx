// // import { useRouter } from "next/router";
// // import { useEffect } from "react";
// // import { useContext } from "react";
// // import { GlobalContext } from "../_app";

// export default function HocPage() {
// //   const router = useRouter();
// //   const { accessToken } = useContext(GlobalContext);

// //   // HOC 안 만들고
// //   useEffect(() => {
// //     if (!accessToken) {
// //       alert("로그인 한 사람만 입장 가능합니다.");
// //       router.push("/23-01-login");
// //     }
// //   }, []);

// //   // accessToken이 있는가?
// //   // accessToken이 없다면, login 페이지로 보내기!!!
// //   return <div>HOC 연습 페이지 입니다!!</div>;
// // }
// }
import { withAuth } from "../../src/components/commons/hocs/withAuth";

const HocPage = () => {
  return <div>HOC 연습 페이지 입니다!!</div>;
};

export default withAuth(HocPage);
// withAuth로 감싸서 HocPage를 내보낸다.

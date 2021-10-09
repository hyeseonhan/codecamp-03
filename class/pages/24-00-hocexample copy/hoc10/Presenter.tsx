import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../../_app";

// function withAuth(Component) {
//   return function 이름은상관없음(props) {
//     const router = useRouter();
//     const { accessToken } = useContext(GlobalContext);

//     useEffect(() => {
//       if (!accessToken) router.push("/login");
//     }, []);

//     return <Component {...props} />;
//   };
// }

function withAuth(Component) {
  return function 이름은상관없음(props) {
    return <Component {...props} />;
  };
}

// withAuth를 화살표 함수로
const withAuth = (Component) => {
  return (props) => {
    return <Component {...props} />;
  };
};

const withAuth = (Component) => (props) => {
  // 검증로직, 세팅로직

  return <Component {...props} />;
};
// 중괄호와 return 사이에 아무것도 없으면 생략 가능

const Presenter = (props) => {
  return <div>프리젠터 입니다. props: {props.aaa}</div>;
};

export default withAuth(Presenter);

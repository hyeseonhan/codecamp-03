import { Router } from "next/router";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../../_app";

const withAuth = (Component) => (props) => {
  // const { accessToken } = useContext(GlobalContext);

  // useEffect(() => {
  //   if (!accessToken) Router.push("/");
  // }, []);

  return <Component {...props} />;
};

const Presenter = (props) => {
  return <div>프리젠터 입니다. props: {props.aaa}</div>;
};

export default withAuth(Presenter);

// // aaa 사용하지 않고 하면 이것을 모든 곳에 다 복붙해야함. 코드 수정할 때 문제 발생
// const Presenter = (props) => {
//   const { accessToken } = useContext(GlobalContext);
//   const router = useRouter()
//   useEffect(() => {
//     if (!accessToken) Router.push("/");
//   }, []);

//   return <div>프리젠터 입니다. props: {props.aaa}</div>;
// };

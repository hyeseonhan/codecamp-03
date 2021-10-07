import "antd/dist/antd.css";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  ApolloLink,
} from "@apollo/client";
import Layout from "../src/components/commons/layout";
import Main from "./main";
import { Global } from "@emotion/react";
import { globalStyles } from "../src/commons/styles/globalStyles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRouter } from "next/router";
import { createUploadLink } from "apollo-upload-client";
import { createContext, useEffect, useState } from "react";

const HIDDEN_Layout = ["/"];
const HIDDEN_Main = [
  "/boards/list",
  "/boards/board-post",
  "/boards/[board_post_detail]",
  "/boards/openapi",
  "/boards/[board_post_detail]/edit",
  "/boards/login",
  "/boards/createacc",
  "/boards",
  "/boards/loginfo",
];

export const GlobalContext = createContext(null);
function MyApp({ Component, pageProps }) {
  const [accessToken, setAccessToken] = useState("");
  const [userInfo, setUserInfo] = useState({});

  const value = {
    accessToken: accessToken,
    setAccessToken: setAccessToken,
    userInfo: userInfo,
    setUserInfo: setUserInfo,
  };

  // useEffect(() => {
  //   const token = localStorage.getItem("accessToken") || "";
  //   // console.log("app:", accessToken);
  //   setAccessToken(token);
  //   // localStorage.clear();
  // }, []);

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken") || "";
    console.log("app:", accessToken);
    // localStorage.clear();
    setAccessToken(accessToken);
  }, []);

  const uploadLink = createUploadLink({
    uri: "http://backend03.codebootcamp.co.kr/graphql",
    headers: { authorization: `Bearer ${accessToken}` },
  });

  const client = new ApolloClient({
    // uri: "http://backend03.codebootcamp.co.kr/graphql",
    link: ApolloLink.from([uploadLink]),
    cache: new InMemoryCache(),
  });

  const router = useRouter();
  const isHiddenLayout = HIDDEN_Layout.includes(router.pathname);
  const isHiddenMain = HIDDEN_Main.includes(router.pathname);

  return (
    <GlobalContext.Provider value={value}>
      <Global styles={globalStyles} />
      <ApolloProvider client={client}>
        {!isHiddenMain && <Main />}
        {!isHiddenLayout && (
          <Layout>
            <Component {...pageProps} />
          </Layout>
        )}
      </ApolloProvider>
    </GlobalContext.Provider>
  );
}

export default MyApp;

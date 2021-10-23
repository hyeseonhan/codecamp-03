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
import { onError } from "@apollo/client/link/error";
import { getAccessToken } from "../src/commons/libraries/getAccessToken";

// import "flickity/css/flickity.css";

const HIDDEN_Layout = ["/"];
const HIDDEN_Main = [
  "/boards",
  "/boards/list",
  "/boards/board-post",
  "/boards/[board_post_detail]",
  "/boards/openapi",
  "/boards/[board_post_detail]/edit",
  "/mypage/login",
  "/mypage/createacc",
  "/mypage/loginfo",
  "/market/product-post",
  "/market/product-list",
  "/market/product-detail",
  "/market/product-detail/[useditemId]",
  "/market/product-detail/[useditemId]/edit",
  "/mypage/mymarket",
  "/mypage/mypoint",
  "/mypage/myprofile",
];

export const GlobalContext = createContext(null);
function MyApp({ Component, pageProps }) {
  const [accessToken, setAccessToken] = useState("");
  const [userInfo, setUserInfo] = useState({});
  const [lat, setLat] = useState("");
  const [lng, setLng] = useState("");
  const [location, setLocation] = useState("");

  const value = {
    accessToken: accessToken,
    setAccessToken: setAccessToken,
    userInfo: userInfo,
    setUserInfo: setUserInfo,
    setLat: setLat,
    setLng: setLng,
    setLocation: setLocation,
    lat,
    lng,
    location,
  };

  useEffect(() => {
    // const accessToken = localStorage.getItem("accessToken") || "";
    // setAccessToken(accessToken);
    // localStorage.clear();
    if (localStorage.getItem("refreshToken")) getAccessToken(setAccessToken);
  }, []);

  // useEffect(() => {
  //   // const accessToken = localStorage.getItem("accessToken") || "";
  //   // console.log("app:", accessToken);
  //   // // localStorage.clear();
  //   // setAccessToken(accessToken);
  //   if (localStorage.getItem("refreshToken")) getAccessToken(setAccessToken);
  // }, []);

  const errorLink = onError(({ grahpQLErrors, operation, forward }) => {
    if (grahpQLErrors) {
      for (const err of grahpQLErrors) {
        if (err.extensions?.code === "UNAUTHENTICATED") {
          operation.setContext({
            headers: {
              ...operation.getContext().headers,
              authorization: `Bearer ${getAccessToken(setAccessToken)}`,
            },
          });

          return forward(operation);
        }
      }
    }
  });

  const uploadLink = createUploadLink({
    uri: "https://backend03.codebootcamp.co.kr/graphql",
    headers: { authorization: `Bearer ${accessToken}` },
    credentials: "include",
  });

  const client = new ApolloClient({
    // uri: "http://backend03.codebootcamp.co.kr/graphql",
    link: ApolloLink.from([errorLink, uploadLink]),
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

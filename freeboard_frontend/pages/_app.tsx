import "antd/dist/antd.css";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  ApolloLink,
} from "@apollo/client";
import Layout from "../src/components/commons/layout";
import Main from ".";
import { Global } from "@emotion/react";
import { globalStyles } from "../src/commons/styles/globalStyles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRouter } from "next/router";
import { createUploadLink } from "apollo-upload-client";
import { createContext, useEffect, useState } from "react";
import { onError } from "@apollo/client/link/error";
import { getAccessToken } from "../src/commons/libraries/getAccessToken";

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
  "/home",
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
    lat: lat,
    lng: lng,
    location: location,
    setUserInfo: setUserInfo,
    setLat: setLat,
    setLng: setLng,
    setLocation: setLocation,
  };

  useEffect(() => {
    if (localStorage.getItem("refreshToken")) getAccessToken(setAccessToken);
  }, []);

  const errorLink = onError(({ graphQLErrors, operation, forward }) => {
    if (graphQLErrors) {
      for (const err of graphQLErrors) {
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
    // uri: "https://backend03.codebootcamp.co.kr/graphql08",
    // uri: "http://backend03.codebootcamp.co.kr/graphql",
    uri: "http://backend04.codebootcamp.co.kr/graphql",
    headers: { authorization: `Bearer ${accessToken}` },
    credentials: "include",
  });

  const client = new ApolloClient({
    link: ApolloLink.from([errorLink, uploadLink as unknown as ApolloLink]),
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

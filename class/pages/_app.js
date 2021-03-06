// import "../styles/globals.css";
import "antd/dist/antd.css";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  ApolloLink,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import Layout from "../src/components/commons/layout";
import { Global } from "@emotion/react";
import { globalStyles } from "../src/commons/styles/globalStyles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { initializeApp } from "firebase/app";
import { createUploadLink } from "apollo-upload-client";
import { createContext, useEffect, useState } from "react";
import { getAcessToken } from "../src/commons/libraries/getAccessToken";

export const firebaseApp = initializeApp({
  apiKey: "AIzaSyBmFjiVUYLBsXsRBmSgFJqNZcGxJcbnK4w",
  authDomain: "codecamp-9ed6d.firebaseapp.com",
  projectId: "codecamp-9ed6d",
  storageBucket: "codecamp-9ed6d.appspot.com",
  messagingSenderId: "592548809411",
  appId: "1:592548809411:web:e54d392af3b435c8d77076",
  measurementId: "G-0ETVDC50RF",
});

export const GlobalContext = createContext(null);
function MyApp({ Component, pageProps }) {
  const [accessToken, setAccessToken] = useState("");
  const [userInfo, setUserInfo] = useState({}); // {} 처음에는 빈객체

  const value = {
    accessToken: accessToken,
    setAccessToken: setAccessToken,
    userInfo: userInfo,
    setUserInfo: setUserInfo,
  };

  useEffect(() => {
    // const accessToken = localStorage.getItem("accessToken") || "";
    // setAccessToken(accessToken);
    // localStorage.clear();
    if (localStorage.getItem("refreshToken")) getAcessToken(setAccessToken);
  }, []);

  // useEffect(() => {
  //   // const Token = localStorage.getItem("accessToken") || "";
  //   // setAccessToken(Token);

  //   // localStorage.clear();
  // }, [accessToken]);

  const errorLink = onError(({ grahpQLErrors, operation, forward }) => {
    if (grahpQLErrors) {
      for (const err of grahpQLErrors) {
        if (err.extensions?.code === "UNAUTHENTICATED") {
          operation.setContext({
            headers: {
              ...operation.getContext().headers,
              authorization: `Bearer ${getAcessToken(setAccessToken)}`,
            },
          });

          return forward(operation);
        }
      }
    }
  });

  const uploadLink = createUploadLink({
    uri: "https://backend03.codebootcamp.co.kr/graphql",
    headers: { authorization: `Bearer ${accessToken}` }, //템플릿리터럴
    // headers: { authorization: `Bearer ${localStorage.getItem("accessToken")}` },
    credentials: "include",
  });

  const client = new ApolloClient({
    // uri: "http://backend03.codebootcamp.co.kr/graphql",
    link: ApolloLink.from([errorLink, uploadLink]),
    cache: new InMemoryCache(),
  });

  return (
    <>
      <GlobalContext.Provider value={value}>
        <Global styles={globalStyles} />
        <ApolloProvider client={client}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ApolloProvider>
      </GlobalContext.Provider>
    </>
  );
}

export default MyApp;

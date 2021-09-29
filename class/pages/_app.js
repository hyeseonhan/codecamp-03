// import "../styles/globals.css";
import "antd/dist/antd.css";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  ApolloLink,
} from "@apollo/client";
import Layout from "../src/components/commons/layout";
import { Global } from "@emotion/react";
import { globalStyles } from "../src/commons/styles/globalStyles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { initializeApp } from "firebase/app";
import { createUploadLink } from "apollo-upload-client";

export const firebaseApp = initializeApp({
  apiKey: "AIzaSyBmFjiVUYLBsXsRBmSgFJqNZcGxJcbnK4w",
  authDomain: "codecamp-9ed6d.firebaseapp.com",
  projectId: "codecamp-9ed6d",
  storageBucket: "codecamp-9ed6d.appspot.com",
  messagingSenderId: "592548809411",
  appId: "1:592548809411:web:e54d392af3b435c8d77076",
  measurementId: "G-0ETVDC50RF",
});

function MyApp({ Component, pageProps }) {
  const uploadLink = createUploadLink({
    uri: "http://backend03.codebootcamp.co.kr/graphql",
  });

  const client = new ApolloClient({
    // uri: "http://backend03.codebootcamp.co.kr/graphql",
    link: ApolloLink.from([uploadLink]),
    cache: new InMemoryCache(),
  });

  return (
    <>
      <Global styles={globalStyles} />
      <ApolloProvider client={client}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ApolloProvider>
    </>
  );
}

export default MyApp;

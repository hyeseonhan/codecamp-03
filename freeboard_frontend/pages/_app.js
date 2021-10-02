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

const HIDDEN_Layout = ["/"];
const HIDDEN_Main = [
  "/boards/list",
  "/boards/board-post",
  "/boards/[board_post_detail]",
  "/boards/openapi",
  "/boards/[board_post_detail]/edit",
];

function MyApp({ Component, pageProps }) {
  const uploadLink = createUploadLink({
    uri: "http://backend03.codebootcamp.co.kr/graphql",
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
    <>
      <Global styles={globalStyles} />
      <ApolloProvider client={client}>
        {!isHiddenMain && <Main />}
        {!isHiddenLayout && (
          <Layout>
            <Component {...pageProps} />
          </Layout>
        )}
      </ApolloProvider>
    </>
  );
}

export default MyApp;

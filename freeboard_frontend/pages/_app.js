import "antd/dist/antd.css";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import Layout from "../src/components/commons/layout";
import Main from "./main";
import { Global } from "@emotion/react";
import { globalStyles } from "../src/commons/styles/globalStyles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRouter } from "next/router";

const HIDDEN_Layout = ["/"];
const HIDDEN_Main = ["/boards/list"];

function MyApp({ Component, pageProps }) {
  const client = new ApolloClient({
    uri: "http://backend03.codebootcamp.co.kr/graphql",
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

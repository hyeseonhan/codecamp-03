import ProductDetail from "../../../../src/components/units/market/detail/ProductDetail.container";
import ProductCommentWrite from "../../../../src/components/units/market/comment/write/ProductCommentWrite.container";
import ProductCommentList from "../../../../src/components/units/market/comment/list/ProductCommentlist.container";
import { useState } from "react";
import Head from "next/head";
import { gql, request } from "graphql-request";

export default function ProductDetailPage(props: any) {
  // 대댓글 아이콘 email로 비교해서 조건부렌더링하기 위해 state 끌어올릴 때 사용
  const [isReplySeller, setIsReplySeller] = useState("");

  // 댓글 아이콘 email 비교해서 조건부렌더링
  const [isCommentSeller, setIsCommentSeller] = useState("");

  return (
    <>
      <Head>
        <meta property="og:title" content={props.fetchUseditem.name} />
        <meta property="og:description" content={props.fetchUseditem.remarks} />
        <meta
          property="og:image"
          content={`https://storage.googleapis.com/${props.fetchUseditem.images[0]}`}
        />
      </Head>
      <ProductDetail />
      <ProductCommentWrite />
      <ProductCommentList
        setIsReplySeller={setIsReplySeller}
        isReplySeller={isReplySeller}
        setIsCommentSeller={setIsCommentSeller}
        isCommentSeller={isCommentSeller}
      />
    </>
  );
}

const FETCH_USEDITEM = gql`
  query fetchUseditem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      name
      remarks
      images
    }
  }
`;

// ssr
export const getServerSideProps = async (context: any) => {
  const result = await request(
    "https://backend03.codebootcamp.co.kr/graphql08",
    FETCH_USEDITEM,
    {
      useditemId: context.query.useditemId,
    }
  );

  return {
    props: {
      fetchUseditem: result.fetchUseditem,
    },
  };
};

import ProductPost from "../../../../../src/components/units/market/post/ProductPost.container";
import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";

const FETCH_USED_ITEM = gql`
  query fetchUseditem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      name
      remarks
      contents
      price
      tags
      images
    }
  }
`;

export default function MarketEditPage() {
  const router = useRouter();
  const { data } = useQuery(FETCH_USED_ITEM, {
    variables: { useditemId: String(router.query.useditemId) },
  });

  return <ProductPost isEdit={true} data={data} />;
}

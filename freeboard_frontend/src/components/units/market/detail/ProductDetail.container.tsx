import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import ProductDetailUI from "./ProductDetail.presenter";
import { FETCH_USED_ITEM, DELETE_USED_ITEM } from "./ProductDetail.queries";

export default function ProductDetail(props) {
  const router = useRouter();
  const { data } = useQuery(FETCH_USED_ITEM, {
    variables: { useditemId: router.query.useditemId },
  });
  const [deleteUseditem] = useMutation(DELETE_USED_ITEM);

  function onClickMoveToList() {
    router.push("/market/product-list");
  }

  function onClickMoveToEdit() {
    router.push(`/market/product-detail/${router.query.useditemId}/edit`);
  }

  // async function onClickDelete() {
  //   try {
  //     await deleteUseditem({
  //       variables: { useditemId: router.query.useditemId },
  //       refetchQueries: [{ query: FETCH_USED_ITEM, variables; { useditemId: }}]
  //     }),

  //   } catch (error) {
  //     alert(error.message);
  //   }
  // }

  return (
    <ProductDetailUI
      data={data}
      onClickMoveToList={onClickMoveToList}
      onClickMoveToEdit={onClickMoveToEdit}
      // onClickDelete={onClickDelete}
    />
  );
}

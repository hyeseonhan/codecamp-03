import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import ProductDetailUI from "./ProductDetail.presenter";
import {
  FETCH_USED_ITEM,
  DELETE_USED_ITEM,
  TOGGLE_USED_ITEM_PICK,
  CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING,
} from "./ProductDetail.queries";

export default function ProductDetail(props) {
  const router = useRouter();
  const { data } = useQuery(FETCH_USED_ITEM, {
    variables: { useditemId: router.query.useditemId },
  });
  const [deleteUseditem] = useMutation(DELETE_USED_ITEM);
  const [toggleUseditemPick] = useMutation(TOGGLE_USED_ITEM_PICK);
  const [createPointTransactionOfBuyingAndSelling] = useMutation(
    CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING
  );

  function onClickMoveToList() {
    router.push("/market/product-list");
  }

  function onClickMoveToEdit() {
    router.push(`/market/product-detail/${router.query.useditemId}/edit`);
  }

  async function onClickDelete() {
    try {
      await deleteUseditem({
        variables: { useditemId: router.query.useditemId },
      }),
        alert("상품이 삭제되었습니다.");
      router.push(`/market/product-list/`);
    } catch (error) {
      alert(error.message);
    }
  }

  async function onClickPicked() {
    await toggleUseditemPick({
      variables: { useditemId: router.query.useditemId },
      refetchQueries: [
        {
          query: FETCH_USED_ITEM,
          variables: { useditemId: router.query.useditemId },
        },
      ],
    });
  }

  async function onClickBuy() {
    try {
      await createPointTransactionOfBuyingAndSelling({
        variables: {
          useritemId: router.query.useditemId,
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM,
            variables: { useritemId: router.query.useditemId },
          },
        ],
      });
      console.log(onClickBuy);
      alert("상품이 구매되었습니다.");
      router.push(`/market/product-list`);
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <ProductDetailUI
      data={data}
      onClickMoveToList={onClickMoveToList}
      onClickMoveToEdit={onClickMoveToEdit}
      onClickDelete={onClickDelete}
      onClickPicked={onClickPicked}
      onClickBuy={onClickBuy}
    />
  );
}

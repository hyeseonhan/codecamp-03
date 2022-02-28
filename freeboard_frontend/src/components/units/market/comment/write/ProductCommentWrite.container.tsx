import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, MouseEvent, useState } from "react";
import ProductCommentWriteUI from "./ProductCommentWrite.presenter";
import {
  CREATE_USED_ITEM_QUESTION,
  UPDATE_USED_ITEM_QUESTION,
} from "./ProductCommentWrite.queries";
import { FETCH_USED_ITEM_QUESTIONS } from "../list/ProductCommentlist.queries";
import { ProductCommentWriteProps } from "./ProductCommentWrite.types";
import {
  IMutation,
  IMutationCreateUseditemQuestionArgs,
  IMutationUpdateUseditemQuestionArgs,
} from "../../../../../commons/types/generated.types";

export default function ProductCommentWrite(props: ProductCommentWriteProps) {
  const router = useRouter();
  const [contents, setContensts] = useState("");
  const [changeEidtForm, setChangeEditForm] = useState(false);

  const [createUseditemQuestion] = useMutation<
    Pick<IMutation, "createUseditemQuestion">,
    IMutationCreateUseditemQuestionArgs
  >(CREATE_USED_ITEM_QUESTION);
  const [updateUseditemQuestion] = useMutation<
    Pick<IMutation, "updateUseditemQuestion">,
    IMutationUpdateUseditemQuestionArgs
  >(UPDATE_USED_ITEM_QUESTION);

  function onChangeContents(event: ChangeEvent<HTMLTextAreaElement>) {
    setContensts(event.target.value);
  }

  async function onClickQuestion() {
    setChangeEditForm(true);
    console.log(contents);
    try {
      await createUseditemQuestion({
        variables: {
          createUseditemQuestionInput: {
            contents: contents,
          },
          useditemId: String(router.query.useditemId),
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM_QUESTIONS,
            variables: { useditemId: router.query.useditemId },
          },
        ],
      });
    } catch (error) {
      alert(error.message);
    }
  }

  async function onClickUpdate(event: MouseEvent<HTMLElement>) {
    if (!(event.target instanceof Element)) return;
    setChangeEditForm(false);
    try {
      await updateUseditemQuestion({
        variables: {
          updateUseditemQuestionInput: { contents: contents },
          useditemQuestionId: event.target.id,
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM_QUESTIONS,
            variables: { useditemId: router.query.useditemId },
          },
        ],
      });
      props.setIsEdit(false);
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <ProductCommentWriteUI
      onChangeContents={onChangeContents}
      onClickQuestion={onClickQuestion}
      onClickUpdate={onClickUpdate}
      contents={contents}
      isEdit={props.isEdit}
      el={props.el}
      isCommentSeller={props.isCommentSeller}
      changeEidtForm={changeEidtForm}
    />
  );
}

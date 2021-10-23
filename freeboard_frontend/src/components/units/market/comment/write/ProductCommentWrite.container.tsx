import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import ProductCommentWriteUI from "./ProductCommentWrite.presenter";
import {
  CREATE_USED_ITEM_QUESTION,
  UPDATE_USED_ITEM_QUESTION,
} from "./ProductCommentWrite.queries";
import { FETCH_USED_ITEM_QUESTIONS } from "../list/ProductCommentlist.queries";

export default function ProductCommentWrite(props) {
  const router = useRouter();
  const [contents, setContensts] = useState("");
  const [changeEidtForm, setChangeEditForm] = useState(false);

  const [createUseditemQuestion] = useMutation(CREATE_USED_ITEM_QUESTION);
  const [updateUseditemQuestion] = useMutation(UPDATE_USED_ITEM_QUESTION);

  function onChangeContents(event) {
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
          useditemId: router.query.useditemId,
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

  async function onClickUpdate(event) {
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

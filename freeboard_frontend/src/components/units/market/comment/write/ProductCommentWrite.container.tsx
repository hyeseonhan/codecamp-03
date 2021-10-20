import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import ProductCommentWriteUI from "./ProductCommentWrite.presenter";
import {
  CREATE_USED_ITEM_QUESTION,
  UPDATE_USED_ITEM_QUESTION,
} from "./ProductCommentWrite.queries";

export default function ProductCommentWrite() {
  const router = useRouter();
  const [contents, setContensts] = useState("");

  const [createUseditemQuestion] = useMutation(CREATE_USED_ITEM_QUESTION);
  const [updateUseditemQuestion] = useMutation(UPDATE_USED_ITEM_QUESTION);

  function onChangeContents(event) {
    setContensts(event.target.value);
  }

  async function onClickQuestion() {
    console.log(contents);
    try {
      await createUseditemQuestion({
        variables: {
          createUseditemQuestionInput: {
            contents: contents,
          },
          useditemId: router.query.useditemId,
        },
      });
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <ProductCommentWriteUI
      onChangeContents={onChangeContents}
      onClickQuestion={onClickQuestion}
      contents={contents}
    />
  );
}

import { useContext } from "react";
// import { MyContext } from "../../../../pages/quiz/22-context-edit";
// import { MyContext } from "../../../../pages/quiz/22-context-new";
import { MyContext } from "../../../../pages/quiz/22-context-edit";

export default function WriteUI() {
  const { isEdit } = useContext(MyContext);
  return <h1>{isEdit ? "수정하기" : "등록하기"}</h1>;
}

// export default function WriteUI(props) {
//   return <h1>{props.isEdit ? "수정하기" : "등록하기"}</h1>;
// }

import { useContext } from "react";
import { MyContext } from "../../../../pages/22-04-context-api";

export default function MyBoardWriteUI() {
  const { isEdit } = useContext(MyContext);
  return <div>{isEdit ? "수정하기" : "등록하기"}</div>;
  // isEdit가 있으면 "수정하기" 없으면 "등록하기"
}

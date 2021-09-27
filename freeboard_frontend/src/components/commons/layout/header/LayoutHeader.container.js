import { useRouter } from "next/router";
import LayoutHeaderUI from "./LayoutHeader.presenter";

export default function LayoutHeader() {
  const router = useRouter();

  function onClickMoveMain() {
    router.push("/");
  }

  return <LayoutHeaderUI onClickMoveMain={onClickMoveMain} />;
}

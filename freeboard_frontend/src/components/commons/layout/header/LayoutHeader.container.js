import { useRouter } from "next/router";
import { useContext, useState } from "react";
import { GlobalContext } from "../../../../../pages/_app";
import LayoutHeaderUI from "./LayoutHeader.presenter";

export default function LayoutHeader() {
  const router = useRouter();
  const { accessToken } = useContext(GlobalContext);
  const [isOpen, setIsOpen] = useState(false);

  function onClickCatogory(event) {
    router.push(event.target.id);
    setIsOpen(false);
  }

  function onClickMoveMain() {
    router.push("/");
  }

  function onClickOpen() {
    setIsOpen((prev) => !prev);
  }

  return (
    <LayoutHeaderUI
      isOpen={isOpen}
      onClickOpen={onClickOpen}
      onClickCatogory={onClickCatogory}
      accessToken={accessToken}
      onClickMoveMain={onClickMoveMain}
    />
  );
}

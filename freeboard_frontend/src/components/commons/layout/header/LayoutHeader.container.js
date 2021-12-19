import { useRouter } from "next/router";
import { useState } from "react";
import LayoutHeaderUI from "./LayoutHeader.presenter";

export default function LayoutHeader() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

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
      onClickMoveMain={onClickMoveMain}
    />
  );
}

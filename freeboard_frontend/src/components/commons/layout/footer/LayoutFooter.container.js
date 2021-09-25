import { useRouter } from "next/router";

import LayoutFooterUI from "./LayoutFooter.presenter";

export default function LayoutFooter() {
  const router = useRouter();

  function onClickDecline() {
    router.push("/");
  }

  function onClickAccept() {
    router.push("/");
  }

  function onClickCookie() {
    router.push("/");
  }

  return (
    <LayoutFooterUI
      onClickDecline={onClickDecline}
      onClickAccept={onClickAccept}
      onClickCookie={onClickCookie}
    />
  );
}

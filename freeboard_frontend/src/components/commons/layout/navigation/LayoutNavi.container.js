import { useRouter } from "next/router";
import LayoutNaviUI from "./LayoutNavi.presenter";

export default function LayoutNavi() {
  const router = useRouter();
  const onClickMenu = (event) => router.push(event.target.id);

  return <LayoutNaviUI onClickMenu={onClickMenu} />;
}

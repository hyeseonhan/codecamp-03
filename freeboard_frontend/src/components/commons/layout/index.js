import styled from "@emotion/styled";
import LayoutHeader from "./header/LayoutHeader.container";
import LayoutFooter from "./footer/LayoutFooter.container";
import LayoutBanner from "./banner/LayoutBanner.container";
import LayoutNavi from "./navigation/LayoutNavi.container";
import MySideBar from "./mysidebar/MySideBar.container";

import { useRouter } from "next/router";

const Wrapper = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

// const Header = styled.div`
//   background-color: red;
//   height: 200px;x
// `;

const Body = styled.div`
  /* background-color: #f04237; */
  /* clear: both; */
  margin-bottom: 160px;
`;

// const Footer = styled.div`
//   background-color: blue;
//   height: 300px;
// `;

const SidebarWapper = styled.div`
  display: flex;
  justify-content: center;
`;

// const Sidebar = styled.div`
//   background-color: yellow;
//   width: 300px;
//   height: 300px;
// `;

// const HIDDEN_Wrapper = ["/boards"];

const HIDDEN_MySidebar = [
  "/boards",
  "/boards/list",
  "/boards/board-post",
  "/boards/[board_post_detail]",
  "/boards/openapi",
  "/boards/[board_post_detail]/edit",
  "/mypage/login",
  "/mypage/createacc",
  // "/mypage/loginfo",
  "/market/product-post",
  "/market/product-list",
  "/market/product-detail",
  "/market/product-detail/[useditemId]",
  "/market/product-detail/[useditemId]/edit",
  "/home",
];

export default function Layout(props) {
  const router = useRouter();
  const isHiddenMySideBar = HIDDEN_MySidebar.includes(router.pathname);

  return (
    <>
      <Wrapper>
        <LayoutHeader />
        {/* <LayoutBanner /> */}
        <LayoutNavi />
        <SidebarWapper>
          <Body>{props.children}</Body>
          {!isHiddenMySideBar && <MySideBar />}
        </SidebarWapper>
        <LayoutFooter />
      </Wrapper>
    </>
  );
}

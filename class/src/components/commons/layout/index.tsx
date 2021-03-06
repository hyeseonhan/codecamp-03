import styled from "@emotion/styled";
import LayoutHeader from "./header/LayoutHeader.container";
import LayoutFooter from "./footer/LayoutFooter.container";
import LayoutBanner from "../layout/banner/LayoutBanner.container";
import LayoutNavi from "../layout/navigation/LayoutNavi.container";
import { useRouter } from "next/router";

const Wrapper = styled.div``;

// const Header = styled.div`
//   background-color: red;
//   height: 200px;x
// `;

const Body = styled.div`
  /* height: 300px; */
`;

// const Footer = styled.div`
//   background-color: blue;
//   height: 300px;
// `;

const SidebarWapper = styled.div`
  display: flex;
`;

const Sidebar = styled.div`
  background-color: yellow;
  width: 300px;
  /* height: 300px; */
`;

const HIDDEN_FOOTER = ["/13-01-layout-hidden"];

export default function Layout(props) {
  const router = useRouter();
  const isHiddenFooter = HIDDEN_FOOTER.includes(router.pathname);
  // router.includes(router.pathname) =
  // console.log(router);

  return (
    <Wrapper>
      {/* <Header>여기는 헤더 영역입니다.</Header> */}
      <LayoutHeader />
      <LayoutBanner />
      <LayoutNavi />
      <SidebarWapper>
        <Sidebar>Sidebar</Sidebar>
        <Body>{props.children}</Body>
      </SidebarWapper>
      {!isHiddenFooter && <LayoutFooter />}
      {/* <Footer>여기는 푸터 영역입니다.</Footer> */}
    </Wrapper>
  );
}

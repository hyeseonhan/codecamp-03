import styled from "@emotion/styled";
import LayoutHeader from "./header/LayoutHeader.container";
import LayoutFooter from "./footer/LayoutFooter.container";
import LayoutBanner from "./banner/LayoutBanner.container";
import LayoutNavi from "./navigation/LayoutNavi.container";

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

export default function Layout(props) {
  const router = useRouter();
  // const isHiddenWrapper = HIDDEN_Wrapper.includes(router.pathname);
  // router.includes(router.pathname) =
  // console.log(router);

  return (
    <>
      <Wrapper>
        <LayoutHeader />
        <LayoutBanner />
        <LayoutNavi />
        <SidebarWapper>
          {/* <Sidebar>Sidebar</Sidebar> */}
          <Body>{props.children}</Body>
        </SidebarWapper>
        <LayoutFooter />
      </Wrapper>
    </>
  );
}

import {
  Wrapper,
  LeftWrapper,
  Title,
  InnerLeftWrapper,
  State,
  StateContent,
} from "./LogInfo.styles";

import RecentlyViewedItems02 from "../../../commons/recentlyvieweditems/recentlyvieweditems02";

export default function LogInfoUI() {
  return (
    <Wrapper>
      <LeftWrapper>
        <Title>ACCOUNT</Title>
        <InnerLeftWrapper>
          <State>Recently viewed items</State>
          <RecentlyViewedItems02 />
        </InnerLeftWrapper>
      </LeftWrapper>
    </Wrapper>
  );
}

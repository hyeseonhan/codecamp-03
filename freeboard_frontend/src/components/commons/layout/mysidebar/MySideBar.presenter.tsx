import {
  Wrapper,
  State,
  LogoutButton,
  RightWrapper,
  Info,
  InnerWrapper1,
  NameInfo,
  EmailInfo,
  InnerWrapper3,
  Avatar,
  InnerLeftWrapper2,
  PointInfo,
} from "./MySideBar.styles";
import { Modal } from "antd";

export default function MySideBarUI(props) {
  return (
    <>
      <Wrapper>
        <RightWrapper>
          <Info>Account Information</Info>
          <InnerWrapper1>
            <State>Name</State>
            <NameInfo>{props.data?.fetchUserLoggedIn.name}</NameInfo>
            <State>Email</State>
            <EmailInfo>{props.data?.fetchUserLoggedIn.email}</EmailInfo>
          </InnerWrapper1>
          <InnerWrapper3>
            <LogoutButton>LOG OUT</LogoutButton>
            <Avatar></Avatar>
            <LogoutButton>CHARGE</LogoutButton>
            <Modal></Modal>
          </InnerWrapper3>
          <InnerLeftWrapper2>
            <State onClick={props.onClickMovetoMyMarket}>Market</State>
            <div>
              <State onClick={props.onClickMovetoMyPoint}>Point</State>
              <PointInfo>$ 100,000</PointInfo>
            </div>
            <State onClick={props.onClickMovetoMyProfile}>Profile</State>
          </InnerLeftWrapper2>
        </RightWrapper>
      </Wrapper>
    </>
  );
}

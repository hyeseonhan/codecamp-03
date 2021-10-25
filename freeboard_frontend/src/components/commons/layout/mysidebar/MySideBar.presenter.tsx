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
import PointCharge from "../../../units/mypage/pointcharge/pointcharge.container";

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
            <Avatar
              src={
                props.data?.fetchUserLoggedIn.picture
                  ? `https://storage.googleapis.com/${props.data?.fetchUserLoggedIn.pciture}`
                  : "/images/you.jpeg"
              }
            />
            <LogoutButton onClick={props.onToggleOpenPointCharge}>
              CHARGE
            </LogoutButton>
            {props.isOpenModal && (
              <Modal
                visible={true}
                width="300px"
                footer={null}
                mask={true}
                maskClosable={false}
                onCancel={props.onToggleOpenPointCharge}
              >
                <PointCharge />
              </Modal>
            )}
          </InnerWrapper3>
          <InnerLeftWrapper2>
            <State onClick={props.onClickMovetoMyMarket}>Market</State>
            <div>
              <State onClick={props.onClickMovetoMyPoint}>Point</State>
              <PointInfo>
                {props.data?.fetchUserLoggedIn.userPoint?.amount.toLocaleString(
                  "ko-KR"
                )}
              </PointInfo>
            </div>
            <State onClick={props.onClickMovetoMyProfile}>Profile</State>
          </InnerLeftWrapper2>
        </RightWrapper>
      </Wrapper>
    </>
  );
}

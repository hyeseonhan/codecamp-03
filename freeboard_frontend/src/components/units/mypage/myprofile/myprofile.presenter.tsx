import MyProfileUploadUI from "../../../commons/uploads/myprofileupload/myprofileupload.container";
import {
  Wrapper,
  LeftWrapper,
  Title,
  InnerLeftWrapper,
  // State,
  // StateContent,
  // Picture,
  // StateButton,
} from "./myprofile.styles";

export default function MyProfileUI(props) {
  return (
    <Wrapper>
      <LeftWrapper>
        <Title>ACCOUNT</Title>
        <InnerLeftWrapper>
          <MyProfileUploadUI
            // onChange={props.onChangeFile}
            defaultValue={props.data?.fetchUserLoggedIn.picture}
          />
        </InnerLeftWrapper>
      </LeftWrapper>
    </Wrapper>
  );
}

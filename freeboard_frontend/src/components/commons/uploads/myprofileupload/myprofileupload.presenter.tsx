import {
  State,
  StateContent,
  Picture,
  UploadImage,
  StateButton,
  UploadImageHidden,
} from "./myprofileupload.styles";

export default function MyProfileUploadUI(props) {
  return (
    <>
      <StateContent>
        <State>CHANGE OF MY PICTURE</State>
        {props.fileUrl || props.defaultValue ? (
          <Picture
            onChange={props.onChangeFile}
            onClick={props.onClickUpload}
            // onClick={props.onClickUploadPicture}
            src={
              props.fileUrl ||
              `https://storage.googleapis.com/${props.defaultValue}`
            }
          />
        ) : (
          <UploadImage
            onClick={props.onClickUpload}
            defaultValue={props.fetchdata?.fetchUserLoggedIn.picture}
          />
        )}
        <UploadImageHidden
          ref={props.fileRef}
          type="file"
          onChange={props.onChangeImage}
        />
        {/* <Picture
          onChange={props.onChangeFile}
          onClick={props.onClickUploadPicture}
        /> */}
        <StateButton onClick={props.onClickUploadPicture}>CHANGE</StateButton>
      </StateContent>
    </>
  );
}

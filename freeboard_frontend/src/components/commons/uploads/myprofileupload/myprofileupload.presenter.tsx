import {
  State,
  StateContent,
  Picture,
  StateButton,
  UploadImageHidden,
} from "./myprofileupload.styles";

export default function MyProfileUploadUI(props) {
  return (
    <>
      <StateContent>
        <State>CHANGE OF MY PICTURE</State>
        <Picture
          onChange={props.onChangeFile}
          onClick={props.onClickUploadPicture}
        />
        <StateButton onClick={props.onClickPicture}>CHANGE</StateButton>
      </StateContent>
      <UploadImageHidden
        ref={props.fileRef}
        type="file"
        onChange={props.onChangeImage}
      />
    </>
  );
}

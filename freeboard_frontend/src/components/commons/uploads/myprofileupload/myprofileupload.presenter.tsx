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
        {props.fileUrl || props.defaultValue ? (
          <Picture
            onChange={props.onChangeFile}
            onClick={props.onClickUploadPicture}
            src={
              props.fileUrl ||
              `https://storage.googleapis.com/${props.defaultPicture}`
            }
          />
        ) : (
          <Picture
            onChange={props.onChangeFile}
            onClick={props.onClickUploadPicture}
          />
        )}
        {/* <Picture
          onChange={props.onChangeFile}
          onClick={props.onClickUploadPicture}
        /> */}
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

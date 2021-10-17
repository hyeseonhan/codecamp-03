import {
  Wrapper,
  Title,
  UploadWrapper,
  UploadDeliteButton,
  UploadImage,
  UploadButton,
  UploadFileHidden,
} from "./Uploads02.styles";

export default function Uploads02UI(props) {
  return (
    <Wrapper>
      <Title>{props.name}</Title>
      {props.fileUrl || props.defaultFileUrl ? (
        <UploadWrapper onClick={props.onClickUpload}>
          <UploadDeliteButton>
            <img src="/images/delite.png"></img>
          </UploadDeliteButton>
          <UploadImage
            type={props.type}
            {...props.register}
            src={
              props.fileUrl ||
              `https://storage.googleapis.com/${props.defaultFileUrl}`
            }
          />
        </UploadWrapper>
      ) : (
        <UploadButton onClick={props.onClickUpload}>
          <>+</>
          <br />
          <>Upload</>
        </UploadButton>
      )}

      <UploadFileHidden
        type="file"
        ref={props.fileRef}
        onChange={props.onChangeFile}
      />
    </Wrapper>
  );
}

import { useRef, useState } from "react";
import { useMutation } from "@apollo/client";
import { UPLOAD_FILE } from "./Uploads01.queries";
import Uploads01UI from "./Uploads01.presenter";
import { fileValidation } from "../../../../components/../commons/libraries/validation";

export default function Uploads01(props) {
  const [uploadFile] = useMutation(UPLOAD_FILE);
  const fileRef = useRef(null);
  const [fileUrl, setFileUrls] = useState("");

  function onClickUpload() {
    fileRef.current?.click();
  }

  async function onChangeFile(event) {
    const file = event.target.files?.[0];
    if (!fileValidation(file)) return;

    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      setFileUrls(data.target?.result);
      props.onChangeFile(file, props.index);
    };
  }

  return (
    <Uploads01UI
      fileRef={fileRef}
      fileUrl={props.fileUrl}
      onClickUpload={onClickUpload}
      onChangeFile={onChangeFile}
    />
  );
}

import { useRef } from "react";
import { useMutation } from "@apollo/client";
import { UPLOAD_FILE } from "./Uploads01.queries";
import Uploads01UI from "./Uploads01.presenter";

export default function Uploads01(props) {
  const [uploadFile] = useMutation(UPLOAD_FILE);
  const fileRef = useRef(null);

  function onClickUpload() {
    fileRef.current?.click();
  }

  async function onChangeFile(event) {
    const file = event.target.files?.[0];
    console.log(file);
    if (!file?.size) {
      alert("파일이 없습니다!");
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      alert("파일 용량이 너무 큽니다. (제한: 5MB");
      return;
    }
    if (!file.type.includes("jpeg") && !file.type.includes("png")) {
      alert("jpeg 또는 png만 업로드 가능합니다!");
      return;
    }
    try {
      const result = await uploadFile({ variables: { file } });
      props.onChangeFileUrls(result.data.uploadFile.url, props.index);
    } catch (error) {
      alert(error);
    }
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

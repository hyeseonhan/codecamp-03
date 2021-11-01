import { useState } from "react";
import { useRef } from "react";
import Uploads02UI from "./Uploads02.presenter";

export default function ItemImgUpload(props) {
  const fileRef = useRef(null);
  const [fileUrl, setFileUrl] = useState("");

  function onClickUpload() {
    fileRef.current?.click();
  }

  async function onChangeFile(event) {
    const file = event.target.files?.[0];
    if (!file) return;

    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = (data) => {
      setFileUrl(data.target?.result as string);
      props.onChangeFiles(file, props.index);
    };
  }

  return (
    <Uploads02UI
      fileRef={fileRef}
      fileUrl={fileUrl}
      onClickUpload={onClickUpload}
      onChangeFile={onChangeFile}
      defaultValue={props.defaultValue}
    />
  );
}

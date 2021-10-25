import { useRef } from "react";
import { useMutation } from "@apollo/client";
import { useState } from "react";
import { UPDATE_USER, UPLOAD_FILE } from "./myprofileupload.queries";
import MyProfileUploadUI from "./myprofileupload.presenter";
import productPost from "../../../../../pages/market/product-post";

export default function MyProfileUpload() {
  const fileRef = useRef(null);
  const [fileUrl, setFileUrl] = useState("");
  const [updateUser] = useMutation(UPDATE_USER);
  const [uploadFile] = useMutation(UPLOAD_FILE);
  const [files, setFiles] = useState(null);

  function onChangeFile(file) {
    setFiles(file);
  }

  function onClickUploadPicture() {
    fileRef.current?.click();
  }

  function onChangeImage(event) {
    const file = event.target.files[0];
    if (!file) {
      alert("파일이 없습니다");
      return;
    }

    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = (data: any) => {
      setFileUrl(data.target.result);
      onChangeFile(file);
    };
  }

  async function onClickPicture() {
    try {
      const result = await uploadFile({
        variables: { file: files },
      });

      const myPicture = result.data?.uploadFil.url;

      await updateUser({
        variables: {
          updateUserInput: { picture: myPicture },
        },
      });
      alert("사진이 변경되었습니다.");
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <MyProfileUploadUI
      onClickUploadPicture={onClickUploadPicture}
      onClickPicture={onClickPicture}
      onChangeImage={onChangeImage}
      onChangeFile={onChangeFile}
    />
  );
}

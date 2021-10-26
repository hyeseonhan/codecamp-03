import { useRef } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { useState } from "react";
import { useContext } from "react";
import { GlobalContext } from "../../../../../pages/_app";
import {
  UPDATE_USER,
  UPLOAD_FILE,
  FETCH_USER_LOGGED_IN,
} from "./myprofileupload.queries";
import MyProfileUploadUI from "./myprofileupload.presenter";

export default function MyProfileUpload(props) {
  const { setUserInfo, userInfo } = useContext(GlobalContext);
  const fileRef = useRef(null);
  const [fileUrl, setFileUrl] = useState("");
  const [updateUser] = useMutation(UPDATE_USER);
  const [uploadFile] = useMutation(UPLOAD_FILE);
  const { data: fetchdata } = useQuery(FETCH_USER_LOGGED_IN);
  const [files, setFiles] = useState(null);

  function onChangeFile(file) {
    setFiles(file);
  }

  function onClickUpload() {
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

  async function onClickUploadPicture() {
    try {
      const result = await uploadFile({
        variables: { file: files },
      });

      const myPicture = result.data?.uploadFile.url;

      await updateUser({
        variables: {
          updateUserInput: { picture: myPicture },
        },
      });
      alert("사진이 변경되었습니다.");
      setUserInfo(files);
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <MyProfileUploadUI
      fileRef={fileRef}
      fileUrl={fileUrl}
      defaultValue={props.defaultValue}
      onClickUploadPicture={onClickUploadPicture}
      onClickUpload={onClickUpload}
      onChangeImage={onChangeImage}
      onChangeFile={onChangeFile}
      fetchdata={fetchdata}
    />
  );
}

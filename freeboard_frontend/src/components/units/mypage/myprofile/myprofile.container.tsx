import { useMutation, useQuery } from "@apollo/client";
import { useState } from "react";
import MyProfileUI from "./myprofile.presenter";
import {
  UPDATE_USER,
  FETCH_USER_LOGGED_IN,
  UPLOAD_FILE,
} from "./myprofile.queries";

export default function MyProfile() {
  const [updateUser] = useMutation(UPDATE_USER);
  const [uploadFile] = useMutation(UPLOAD_FILE);
  const [files, setFiles] = useState(null);
  const { data } = useQuery(FETCH_USER_LOGGED_IN);

  function onChangeFile(file) {
    setFiles(file);
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
    <MyProfileUI
      onChangeFile={onChangeFile}
      onClickPicture={onClickPicture}
      data={data}
    />
  );
}

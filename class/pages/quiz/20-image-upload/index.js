import { gql, useMutation } from "@apollo/client";
import { useRef, useState } from "react";

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
    }
  }
`;

export default function ImageUploadPage() {
  const fileRef = useRef();
  const [imageUrl, setImageUrl] = useState("");
  const [myFile, setMyFile] = useState("");
  const [uploadFile] = useMutation(UPLOAD_FILE);
  const [createBoard] = useMutation(CREATE_BOARD);
  const [myWriter, setMyWriter] = useState("");
  const [myPassword, setMyPassword] = useState("");
  const [myTitle, setMyTitle] = useState("");
  const [myContents, setMyContents] = useState("");

  function onChangeMyWriter(event) {
    setMyWriter(event.target.value);
  }

  function onChangeMyPassword(event) {
    setMyPassword(event.target.value);
  }

  function onChangeMyTitle(event) {
    setMyTitle(event.target.value);
  }

  function onChangeMyContents(event) {
    setMyContents(event.target.value);
  }

  function onClickGray() {
    fileRef.current.click();
  }

  async function onChangeFile(event) {
    const file = event.target.files[0];
    const fileReader = await new FileReader();
    fileReader.readAsDataURL(file); //임시url
    fileReader.onload = (data) => {
      console.log(data.target.result);
      setImageUrl(data.target.result);
      setMyFile(file);
    };
  }

  async function onClickSubmit() {
    const result = await Promise.all([
      uploadFile({ variables: { file: myFile } }),
      uploadFile({ variables: { file: myFile } }),
      uploadFile({ variables: { file: myFile } }),
    ]);
    const urls = result.map((el) => el.data.uploadFile.url);

    createBoard({
      variables: {
        createBoardInput: {
          writer: myWriter,
          password: myPassword,
          title: myTitle,
          contents: myContents,
          images: urls,
        },
      },
    });
  }
  return (
    <>
      <div>이미지 업로드</div>
      <div
        style={{ width: "50px", height: "50px", backgroundColor: "gray" }}
        onClick={onClickGray}
      />
      <img src={imageUrl} />
      <input
        type="file"
        ref={fileRef}
        style={{ display: "none" }}
        onChange={onChangeFile}
      />
      작성자: <input type="text" onChange={onChangeMyWriter} />
      비밀번호: <input type="text" onChange={onChangeMyPassword} />
      제목: <input type="text" onChange={onChangeMyTitle} />
      내용: <input type="text" onChange={onChangeMyContents} />
      <button onClick={onClickSubmit}>게시물 등록</button>
    </>
  );
}

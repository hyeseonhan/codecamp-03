import { gql, useMutation } from "@apollo/client";
import { useState, useRef } from "react";
import styled from "@emotion/styled";

const Upload = styled.div`
  margin: 10px;
`;

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
    }
  }
`;

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

// const FETCH_BOARD =gql`
// query  fetchBoard($boardId: ID!){
//   fetchBoard(boardId: $boardId){
//     _id
//   }
// }
// `

export default function ImageUploadPage() {
  const [imageUrl1, setImageUrl1] = useState("");
  const [imageUrl2, setImageUrl2] = useState("");
  const [imageUrl3, setImageUrl3] = useState("");
  const fileRef = useRef();
  const [createBoard] = useMutation(CREATE_BOARD);
  const [uploadFile] = useMutation(UPLOAD_FILE);
  // const [fetchBoard] = useQuery(FETCH_BOARD)
  const [myWriter, setMyWriter] = useState("");
  const [myPasswrod, setMyPassword] = useState("");
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

  function onClickSubmit() {
    createBoard({
      variables: {
        createBoardInput: {
          writer: myWriter,
          password: myPasswrod,
          title: myTitle,
          contents: myContents,
          images: [imageUrl1, imageUrl2, imageUrl3],
        },
      },
    });
  }

  async function onChangeFile(event) {
    const myFile = event.target.files[0];
    console.log(myFile);

    if (!myFile) {
      alert("파일이 없습니다!");
      return;
    }

    if (myFile.size > 5 * 1024 * 1024) {
      alert("파일 용량이 너무 큽니다. (제한: 5MB");
      return;
    }

    if (!myFile.type.includes("jpeg") && !myFile.type.includes("png")) {
      alert("jpeg 또는 png만 업로드 가능합니다!");
      return;
    }

    const result = await uploadFile({
      variables: {
        file: myFile,
      },
    });
    // console.log(result.data.uploadFile.url);
    // setImageUrl(imageUrl.concat([result.data.uploadFile.url]));
    if (!imageUrl1) {
      setImageUrl1(result.data.uploadFile.url);
    } else if (!imageUrl2) {
      setImageUrl2(result.data.uploadFile.url);
    } else if (!imageUrl3) {
      setImageUrl3(result.data.uploadFile.url);
    }
  }

  function onClickDiv() {
    fileRef.current?.click();
  }

  return (
    <>
      <div>이미지 업로드!</div>
      {!imageUrl1 ? (
        <Upload
          style={{ width: "100px", height: "100px", backgroundColor: "gray" }}
          onClick={onClickDiv}
          imageUrl={imageUrl1}
        >
          이미지선택
        </Upload>
      ) : (
        <Upload src={`https://storage.googleapis.com/${imageUrl1}`} />
      )}
      {!imageUrl2 ? (
        <Upload
          style={{ width: "100px", height: "100px", backgroundColor: "gray" }}
          onClick={onClickDiv}
          imageUrl={imageUrl2}
        >
          이미지선택
        </Upload>
      ) : (
        <Upload src={`https://storage.googleapis.com/${imageUrl2}`} />
      )}
      {!imageUrl3 ? (
        <Upload
          style={{ width: "100px", height: "100px", backgroundColor: "gray" }}
          onClick={onClickDiv}
          imageUrl={imageUrl3}
        >
          이미지선택
        </Upload>
      ) : (
        <Upload src={`https://storage.googleapis.com/${imageUrl3}`} />
      )}
      <input
        ref={fileRef}
        style={{ display: "none" }}
        type="file"
        onChange={onChangeFile}
      />
      작성자: <input type="text" onChange={onChangeMyWriter} />
      비밀번호: <input type="text" onChange={onChangeMyPassword} />
      제목: <input type="text" onChange={onChangeMyTitle} />
      내용: <input type="text" onChange={onChangeMyContents} />
      <button onClick={onClickSubmit}>등록하기</button>
    </>
  );
}

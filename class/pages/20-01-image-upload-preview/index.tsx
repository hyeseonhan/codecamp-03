import { useState } from "react";
import { useRef } from "react";
import { fileValidation } from "../../src/commons/libraries/validation";
import { gql, useMutation } from "@apollo/client";

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

export default function ImageUploadPreviwPage() {
  const [imageUrl, setImageUrl] = useState("");
  const [myFile, setMyFile] = useState("");
  const fileRef = useRef<HTMLInputElement>();
  const [uploadFile] = useMutation(UPLOAD_FILE);
  const [createBoard] = useMutation(CREATE_BOARD);

  function onClickGray() {
    fileRef.current.click();
  }

  function onChangeFile(event) {
    const file = event.target.files[0];
    if (!fileValidation(file)) return;

    const fileReader = new FileReader();
    fileReader.readAsDataURL(file); //스토리지에 저장된 url 아니라 내 컴에서만 사용되는 임시 url
    fileReader.onload = (data) => {
      console.log(data.target.result);
      setImageUrl(data.target.result);
      setMyFile(file);
    };
  }

  async function onClickSubmit() {
    const start = performance.now();
    Promise.all([
      uploadFile({ variables: { file: myFile1 } }),
      uploadFile({ variables: { file: myFile2} }),
      uploadFile({ variables: { file: myFile3 } }),
      uploadFile({ variables: { file: myFile } }),
      uploadFile({ variables: { file: myFile } }),
    ]);
    const end = performance.now();
    console.log(end - start);
    
    //[result1, result2, result3, ...]

    const urls = result.map((el => (el.dat.uploadFile.)))
    
    // 세개 다 동시 받을 때 await

    //   const result1 = await uploadFile({variables: file: myFile}},
    // }

    // const result = await uploadFile({variables: {file: myFile,},});
    // const url = result.data.uploadFile.url;

    // 게시물등록
    // createBoard({variables:{
    //     ...
    //     images:[url]
    //   }})
  }

  return (
    <>
      <div
        style={{ width: "50px", height: "50px", backgroundColor: "gray" }}
        onClick={onClickGray}
      >
        이미지업로드!
      </div>
      <img src={imageUrl}  />
      <input type="file" ref={fileRef} onChange={onChangeFile} />
      <button onClick={onClickSubmit}>게시물 등록하기</button>
    </>
  );
}

import { useState } from "react";
import { useRef } from "react";
import { fileValidation } from "../../src/commons/libraries/validation";
import { gql, useMutation } from "@apollo/client";

// 11 뮤테이션
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
  const [imageUrl, setImageUrl] = useState(""); //5 state에 미리보기 url 저장.
  const [myFile, setMyFile] = useState(""); //9 file을 저장할 state 만듬
  const fileRef = useRef<HTMLInputElement>(); // 1useRef: 특정 태그를 조작하기 위해 선택할 때 사용하는 도구. 예) cursor 깜빡깜빡
  const [uploadFile] = useMutation(UPLOAD_FILE); //12
  const [createBoard] = useMutation(CREATE_BOARD);

  function onClickGray() {
    fileRef.current.click();
  }

  function onChangeFile(event) {
    const file = event.target.files[0];
    if (!fileValidation(file)) return; // 2거짓이면 리턴(여기서 끝). true 이면 아래로 넘어감.

    const fileReader = new FileReader();
    fileReader.readAsDataURL(file); //3스토리지에 저장된 url 아니라 내 컴에서만 사용되는 임시 url 뽑아냄
    fileReader.onload = (data) => {
      // 4파일을 읽기 시작하고
      console.log(data.target.result); // 읽은 결과가 (data.target.result)로 들어옴 또한 ()=임시로 생성된 url, 즉 아직 서버에 안올라온 데이터
      setImageUrl(data.target.result); //6 만든 state안에다 임시 미리보기 url을 저장해줌. yarn dev해서 해보면 업로드 속도가 굉장히 빠르지만 여기까지 과정은 임시 url일뿐(storage에 올리지 않은 상태).
      setMyFile(file); //8 그러면 언제 업로드를 할것인가? '게시물등록하기' 버튼을 클릭했을 때 업로드! 이 때 받아온 url로 게시물 등록하기를 이어서 진행해야한다.
    }; // 게시물 등록하기에서 업로드를 해야한다. 게시물등록하기버튼을 클릭했을 때 업로드파일이 실행되게 하려면 'file'을 state에 넣어줘야한다. 'file'을 저장할 state를 만들어야함! myfile에 file 이 저장됨
  }

  // 11 업로드파일을 뮤테이션 해주면 됨. 실제 파일을 등록하는 과정은 여기서
  async function onClickSubmit() {
    const start = performance.now();
    Promise.all([
      //15 Promise: 비동기 처리할 때 데이터를 주긴 줄게, 약속만 하는거. 아직 안줌. Promise를 동시에 받는 방법이 있음=>Promise.all([배열])
      uploadFile({ variables: { file: myFile } }), // 8에서 저장한 파일은 'uploadFile'로 보내줌.
      uploadFile({ variables: { file: myFile } }),
      uploadFile({ variables: { file: myFile } }), // 16 3개 동시에 보내고 동시에 받고. => 3개 동시에 보내고 3개 다 받을 때까지 await
      uploadFile({ variables: { file: myFile } }),
      uploadFile({ variables: { file: myFile } }),
    ]);
    const end = performance.now();
    console.log(end - start);
    // 순서가 없기때문에 동시에 가능. 먼저 끝난 순서대로 받아짐. 순서가 중요하면 이걸 사용 못함.

    //[result1, result2, result3, ...]
    // const urls = result.map((el => (el.data.uploadFile.url))) //[url1, url2, url3, ...]  이거 자체가 배열
    // 세개 다 동시 받을 때 await

    //시간 재는거
    // const start = performance.now();
    // 14 2단계: 이미지를 세개를 넣는 다고 가정. 업로드를 세번 해줘야함. async await 이라 순서대로 기다려야함. 총 4번 뮤테이션 너무 오래걸림. 동시에 올리는 방법을 해야함.=> 15 Promise.all
    // const result1 = await uploadFile({variables: {file: myFile}}),
    // const result2 = await uploadFile({variables: {file: myFile}}),
    // const result3 = await uploadFile({variables: {file: myFile}}),
    // const result4 = await uploadFile({variables: {file: myFile}}),
    // const result5 = await uploadFile({variables: {file: myFile}});
    // const end = performance.now();
    // console.log(end - start);

    // const result = await uploadFile({variables: {file: myFile,},});
    // const url = result.data.uploadFile.url;  // 12 결과를 url 로 저장함

    // 게시물등록   // 13
    // createBoard({variables:{
    //     ...
    //     images: urls  // urls 자체가 위에서 배열로 정의점 따라서 [] 필요없음
    //   }})

    // 13 1단계 onClickSubmit버튼 클릭 -> uploadFile 하고 -> 여기서 받아온 url로 -> 게시물등록하기
  }

  return (
    <>
      <div
        style={{ width: "50px", height: "50px", backgroundColor: "gray" }}
        onClick={onClickGray}
      >
        이미지업로드!
      </div>
      <img src={imageUrl} /> {/* 7 여기다가 미리보기 이미지를 그림 */}
      <input type="file" ref={fileRef} onChange={onChangeFile} />{" "}
      {/* onChange 파일을 변경시키는 */}
      <button onClick={onClickSubmit}>게시물 등록하기</button>{" "}
      {/* 10 게시물등록하기 버튼 생성 */}
    </>
  );
}

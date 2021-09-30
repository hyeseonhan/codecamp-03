export function fileValidation(file) {
  if (!file) {
    alert("파일이 없습니다!");
    return false;
  } // 파일이 없스면 리턴. !file = 파일이 없다.

  if (file.size > 5 * 1024 * 1024) {
    alert("파일 용량이 너무 큽니다. (제한: 5MB");
    return false;
  }

  if (!file.type.includes("jpeg") && !file.type.includes("png")) {
    alert("jpeg 또는 png만 업로드 가능합니다.");
    return false; // 그 파일이 아니면 리턴(거짓)
  }
  return true; // 3개 조건을 다 통과하면(리턴하지않으면) true 리턴
}

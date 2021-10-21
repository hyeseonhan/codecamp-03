import { memo } from "react";

function MemoizationPresenterPage(props) {
  console.log("프리젠터가 렌더링 되었습니다!!");

  return (
    <>
      <div>=================</div>
      <div>이것은 프리젠터입니다.</div>
      <div>=================</div>
    </>
  );
}

// memo 도구를 사용하면 프리젠터 부분이 렌더링 되지 않는다.
export default memo(MemoizationPresenterPage);

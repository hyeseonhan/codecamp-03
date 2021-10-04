import PropsComponentUI from "./Props.presenter";

export default function PropsComponent() {
  // <PropsComponentUI child="철수" age={13} /> 함수형 컴포넌트를 불러오는 방식
  return <>{PropsComponentUI({ child: "철수", age: 13 })}</>; // 함수 자체를 불러오는 방식
}

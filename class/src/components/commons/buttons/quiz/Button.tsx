import styled from "@emotion/styled";

interface IProps {
  isValid: boolean;
}

export default function ButtonQuiz(props) {
  const MyButton = styled.button`
    background-color: ${(props: IProps) =>
      props.isValid ? "yellow" : "green"};
  `;
  return (
    <MyButton type={props.type} isValid={props.isValid}>
      {props.name}
    </MyButton>
  );
}

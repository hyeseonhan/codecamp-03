//리스트로 가는 버튼
import styled from "@emotion/styled";

interface IProps {
  isValid: boolean;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 24px;
`;

const Button = styled.button`
  width: 179px;
  height: 30px;
  border: none;
  background-color: black;
  color: ${(props: IProps) => (props.isValid ? "#f04237" : "white")};
  cursor: pointer;
`;

export default function Button01(props) {
  return (
    <Wrapper>
      <Button
        type={props.type}
        isValid={props.isValid}
        id={props.id}
        onClick={props.onClick}
      >
        {props.name}
      </Button>
    </Wrapper>
  );
}

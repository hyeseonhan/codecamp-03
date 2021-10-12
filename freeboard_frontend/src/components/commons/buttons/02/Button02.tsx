//구매하러가 가는 버튼

import styled from "@emotion/styled";

interface IProps {
  isValid: boolean;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Button = styled.button`
  width: 179px;
  height: 52px;
  border: none;
  background-color: ${(props: IProps) => (props.isValid ? "yellow" : "")};
`;

export default function Button02(props) {
  return (
    <Wrapper>
      <Button type={props.type} isValid={props.isValid}>
        {props.name}
      </Button>
    </Wrapper>
  );
}

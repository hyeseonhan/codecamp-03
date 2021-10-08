// 한 줄 창
import styled from "@emotion/styled";

const Wrapper = styled.div``;

const InputTitle = styled.div``;

const Input = styled.input``;

export default function Inputs01(props) {
  return (
    <Wrapper>
      <InputTitle
        placeholder={props.placeholder}
        type={props.type}
        {...props.register}
      >
        {props.name}
      </InputTitle>
      <Input
        placeholder={props.placeholder}
        type={props.type}
        {...props.register}
      />
    </Wrapper>
  );
}

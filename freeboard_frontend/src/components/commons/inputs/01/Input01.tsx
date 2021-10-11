// 한 줄 Input창
import styled from "@emotion/styled";

const Wrapper = styled.div``;

const TitleName = styled.div`
  margin-bottom: 16px;
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  line-height: 23.68px;
`;

const Input = styled.input`
  width: 996px;
  height: 52px;
  padding-left: 16px;
`;

export default function Input01(props) {
  return (
    <Wrapper>
      <TitleName>{props.name}</TitleName>
      <Input
        type={props.type}
        placeholder={props.placeholder}
        {...props.register}
      />
    </Wrapper>
  );
}

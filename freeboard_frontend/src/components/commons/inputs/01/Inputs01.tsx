// 한 줄 창
import styled from "@emotion/styled";

const Wrapper = styled.div`
  margin-bottom: 40px;
`;

// const InputTitle = styled.div``;

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

export default function Inputs01(props) {
  return (
    <Wrapper>
      {/* <InputTitle
        placeholder={props.placeholder}
        type={props.type}
        {...props.register}
      /> */}
      <TitleName>{props.name}</TitleName>
      <Input
        placeholder={props.placeholder}
        type={props.type}
        {...props.register}
      />
    </Wrapper>
  );
}

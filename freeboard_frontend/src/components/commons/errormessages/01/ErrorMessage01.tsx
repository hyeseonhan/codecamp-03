import styled from "@emotion/styled";

const Error = styled.div`
  color: red;
  margin-bottom: 40px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: initial;
`;

export default function ErrorMessage01(props) {
  return <Error>{props.message}</Error>;
}

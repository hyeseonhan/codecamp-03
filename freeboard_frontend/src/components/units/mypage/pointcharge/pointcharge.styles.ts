import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.div`
  margin-bottom: 10px;
  font-weight: 800;
`;

export const Amount = styled.input`
  margin-bottom: 10px;
  width: 200px;
  padding-left: 10px;
`;

export const PayButton = styled.button`
  border: 2px solid black;
  background-color: black;
  color: white;
`;

import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const LeftWarpper = styled.div`
  margin-top: 50px;
  width: 200px;
  height: 100px;
`;

export const RightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-top: 50px;
  width: 200px;
  height: 100px;
`;

export const InnerWrapper = styled.div`
  cursor: pointer;
`;

export const InnerWrapper1 = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const Name = styled.div`
  font-size: 15x;
  font-weight: 700;
  color: #4f4f4f;
`;

export const Name1 = styled.div`
  font-size: 15x;
  /* font-weight: 700; */
  color: #4f4f4f;
`;

export const Title = styled.div`
  font-size: 17x;
  font-weight: 800;
  text-decoration: underline 3px;
`;

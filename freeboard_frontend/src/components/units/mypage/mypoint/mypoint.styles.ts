import styled from "@emotion/styled";

export const Wrapper = styled.div`
  /* font-family: "LightBold"; */
  width: 100%;
  margin-top: 80px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  /* border: 1px solid red; */
`;

export const LeftWrapper = styled.div`
  width: 900px;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  /* align-items: center; */
`;

export const Title = styled.div`
  font-weight: 700;
  font-size: 20px;
  padding-bottom: 10px;
`;

export const InnerLeftWrapper = styled.div`
  width: 690px;
  padding-left: 18px;
  padding-bottom: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
`;

export const State = styled.div`
  font-weight: 600;
  font-size: 16px;
`;

export const StateContent = styled.div`
  width: 400px;
  border: 1px solid red;
  border: none;
  height: 60px;
  font-size: 12px;
`;

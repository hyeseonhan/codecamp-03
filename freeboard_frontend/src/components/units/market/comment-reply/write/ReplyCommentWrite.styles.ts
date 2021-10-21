import styled from "@emotion/styled";

export const OutWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 40px;
`;

export const ReplyIcon = styled.img`
  width: 15px;
  height: 17px;
  margin-right: 25px;
`;

export const InnerWrapper = styled.div`
  width: 1095px;
  border: 1px solid lightgray;
  margin-bottom: 40px;
`;

export const Contents = styled.textarea`
  width: 100%;
  height: 64px;
  resize: none;
  border: none;
  /* border-bottom: 1px solid lightgray; */
  padding: 20px;
`;

export const ContentsBottom = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-top: 1px solid lightgray;
`;

export const ContentsLength = styled.div`
  width: 100%;
  height: 51x;
  line-height: 52px;
  padding-left: 20px;
  color: gray;
`;

export const Button = styled.button`
  width: 91px;
  height: 52px;
  background-color: black;
  color: white;
  cursor: pointer;
`;

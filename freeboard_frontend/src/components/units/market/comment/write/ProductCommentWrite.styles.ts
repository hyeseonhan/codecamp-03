import styled from "@emotion/styled";

export const Wrapper = styled.div`
  /* width: 1200px; */
  margin: 0px 100px 40px;
  /* margin-bottom: 40px; */
`;

export const TopWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
`;

export const CommentIcon = styled.img`
  padding-right: 14px;
  -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
  filter: grayscale(100%);
`;

export const Titlename = styled.div`
  font-weight: 500px;
  font-style: normal;
  font-size: 18px;
`;

export const InnerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  /* border: 1px solid red; */
`;

export const Avatar = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 16px;
`;

export const MiddleWrapper = styled.div``;

export const InputWrapper = styled.div`
  width: ${(props) => (props.isEdit === true ? "1143px" : "1200px")};
  /* width: 1200px; */
  border: 1px solid lightgray;
`;

export const Writer = styled.div`
  font-weight: 500;
  font-style: normal;
  font-size: 16px;
  line-height: 23.68px;
  margin-bottom: 6px;
`;

export const Contents = styled.textarea`
  width: 100%;
  height: 108px;
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

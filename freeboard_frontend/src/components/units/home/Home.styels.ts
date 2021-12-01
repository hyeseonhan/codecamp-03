import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const LeftWarpper = styled.div`
  margin-top: 50px;
  width: 220px;
  height: 100px;
`;

export const RightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-top: 50px;
  width: 210px;
  height: 100px;
`;

export const InnerWrapper = styled.div`
  width: 300px;
  cursor: pointer;
  margin-bottom: 10px;
`;

export const InnerWrapper1 = styled.div`
  width: 290px;
  /* border: 1px solid red; */
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-bottom: 10px;
`;

export const Name = styled.div`
  font-size: 15x;
  font-weight: 700;
  color: #4f4f4f;
  /* width: 280px; */
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Name1 = styled.div`
  font-size: 15x;
  /* font-weight: 700; */
  color: #4f4f4f;
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Title = styled.div`
  width: 265px;
  /* border: 2px solid red; */
  font-size: 23px;
  font-weight: 700;
  text-decoration: underline 3px;
  margin-bottom: 15px;
`;

export const Like = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const LikeImage = styled.img`
  padding-bottom: 2px;
  margin-right: 4px;
  width: 14px;
  height: 14px;
  -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
  filter: grayscale(100%);
`;

export const LikeCount = styled.div`
  font-size: 10x;
  color: #4f4f4f;
`;

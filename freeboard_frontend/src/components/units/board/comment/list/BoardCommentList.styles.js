import styled from "@emotion/styled";
import { Rate } from "antd";

export const Wrapper = styled.div`
  /* margin: 0px 100px; */
  padding-top: 20px;
  padding-bottom: 20px;
`;

export const CommentWrapper = styled.div`
  width: 1200px;
  /* height: 120px; */
  border-bottom: 1px solid #bdbdbd;
  margin: 20px;
  display: flex;
  justify-content: space-between;
  margin: 0px 100px;
`;

export const Avatar = styled.img`
  width: 40px;
  height: 40px;
  /* padding-right: 16px; */
`;

export const Info = styled.div`
  width: 1087px;
`;

export const WriterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Writer = styled.div`
  font-size: 16px;
  font-weight: 500;
  line-height: 23.68px;
  margin-right: 18px;
`;

export const Star = styled(Rate)``;

export const Content = styled.div`
  font-size: 16px;
  font-weight: 500;
  line-height: 23.68px;
  color: #4f4f4f;
  padding-top: 4px;
`;

export const CreatedAt = styled.div`
  font-size: 12px;
  font-weight: 400;
  line-height: 17.76px;
  color: #bdbdbd;
  padding-top: 20px;
  padding-bottom: 20px;
`;

export const Button = styled.div`
  display: flex;
  align-items: flex-start;
`;

export const UpdatePencil = styled.img`
  color: #bdbdbd;
  padding-right: 16px;
  cursor: pointer;
`;

export const DeliteIcon = styled.img`
  color: #bdbdbd;
`;

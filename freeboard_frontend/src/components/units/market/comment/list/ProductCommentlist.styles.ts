import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1200px;
  margin: 0px 100px;
  padding-top: 20px;
  height: 128px;
  border-bottom: 1px solid lightgray;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Avatar = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 16px;
`;

export const InnerWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const InfoWrapper = styled.div``;

export const Writer = styled.div`
  margin-bottom: 4px;
  font-weight: 500px;
  font-style: normal;
  font-size: 16px;
  line-height: 23.68px;
`;

export const Content = styled.div`
  margin-bottom: 20px;
  font-weight: 400px;
  font-style: normal;
  font-size: 16px;
  line-height: 23.68px;
  color: #4f4f4f;
`;

export const Date = styled.div`
  font-weight: 400px;
  font-style: normal;
  font-size: 12px;
  line-height: 17.76px;
  color: #bdbdbd;
`;

export const Reply = styled.img`
  width: 20px;
  height: 20px;
`;

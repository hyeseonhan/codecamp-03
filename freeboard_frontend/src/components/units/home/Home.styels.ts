import styled from "@emotion/styled";
import { breakPoints } from "../../../commons/styles/media";

export const Wrapper = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  @media ${breakPoints.tablet} {
    width: 100%;
    /* background-color: green; */
  }

  @media ${breakPoints.mobile} {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* justify-content: space-around; */
    /* background-color: blue; */
  }

  @media ${breakPoints.phone} {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* background-color: purple; */
  }
`;

export const LeftWarpper = styled.div`
  margin-top: 50px;
  width: 220px;
  /* border: 1px solid red; */

  @media ${breakPoints.mobile} {
    order: 1;
    width: 100%;
    padding-left: 12px;
  }

  @media ${breakPoints.phone} {
    order: 2;
    width: 100%;
    padding-left: 12px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

export const RightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-top: 50px;
  width: 210px;
  /* border: 1px solid red; */

  @media ${breakPoints.mobile} {
    order: 3;
    width: 100%;
    padding-right: 12px;
  }

  @media ${breakPoints.phone} {
    order: 3;
    width: 100%;
    padding-left: 12px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

export const InnerWrapper = styled.div`
  width: 300px;
  cursor: pointer;
  margin-bottom: 10px;

  @media ${breakPoints.mobile} {
    width: 100%;
  }
`;

export const InnerWrapper1 = styled.div`
  width: 290px;
  /* border: 1px solid red; */
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-bottom: 10px;

  @media ${breakPoints.mobile} {
    width: 100%;
  }

  @media ${breakPoints.phone} {
    margin-bottom: 0px;
  }
`;

export const Name = styled.div`
  width: 290px;
  font-size: 15x;
  font-weight: 700;
  color: #4f4f4f;
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Name1 = styled.div`
  width: 290px;
  /* border: 1px solid blue; */
  font-size: 15x;
  color: #4f4f4f;
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ProductName = styled.div`
  width: 290px;
  font-size: 15x;
  font-weight: 700;
  color: #4f4f4f;
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: end;
`;

export const Name2 = styled.div`
  width: 290px;
  /* border: 1px solid red; */
  font-size: 15x;
  color: #4f4f4f;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-align: end;
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

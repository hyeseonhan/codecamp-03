import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

export const Wrapper = styled.div`
  padding-top: 60px;

  @media ${breakPoints.mobile} {
    padding-top: 20px;
  }

  @media ${breakPoints.phone} {
    padding-top: 5px;
  }
`;

export const BestTitle = styled.div`
  display: flex;
  justify-content: center;
  font-size: 36px;
  font-weight: 700;
  line-height: 42.19px;
  font-family: "LightBold";
  margin-bottom: 20px;
  font-family: "LightBold";

  @media ${breakPoints.phone} {
    font-size: 30px;
  }
`;

export const ListWrapper = styled.div`
  width: 1100px;
  /* border: 1px solid blue; */
  display: flex;
  flex-direction: row;

  @media ${breakPoints.mobile} {
    width: 667px;
  }

  @media ${breakPoints.phone} {
    width: 375px;
  }
`;

export const LeftWrapper = styled.div`
  /* border: 1px solid red; */
`;

export const TableTop = styled.div`
  width: 1100px;
  height: 52px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 40px 0px 40px;
  margin-bottom: 10px;
  /* border: 1px solid red; */

  @media ${breakPoints.mobile} {
    width: 667px;
  }

  @media ${breakPoints.phone} {
    width: 375px;
    margin-bottom: 0px;
  }
`;

export const Category = styled.div`
  display: flex;
  flex-direction: row;
`;

interface IProps {
  isVisible: boolean;
}

export const OnSale = styled.div`
  margin-right: 20px;
  font-weight: 600;
  font-style: normal;
  font-size: 17px;
  line-height: 26.64px;
  cursor: pointer;
  color: ${(props: IProps) => (props.isVisible === true ? "black" : "#f04237")};
`;

interface IProps {
  isVisible: boolean;
}

export const Sold = styled.div`
  font-weight: 600;
  font-style: normal;
  font-size: 17px;
  line-height: 26.64px;
  cursor: pointer;
  color: ${(props: IProps) => (props.isVisible === true ? "#f04237" : "black")};
`;

export const Wrap = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  /* border: 1px solid blue; */

  @media ${breakPoints.phone} {
    justify-content: center;
  }
`;

export const TableSell = styled.div`
  width: 190px;
  height: 190px;
  /* border: 3px solid black; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 13px;
  cursor: pointer;

  @media ${breakPoints.phone} {
    width: 320px;
    height: 320px;
  }
`;

export const ProductImage = styled.img`
  width: 190px;
  height: 190px;
  border: 1px solid black;
  border: none;

  @media ${breakPoints.phone} {
    width: 320px;
    height: 320px;
  }
`;

export const NoneImage = styled.div`
  width: 190px;
  height: 190px;
  border: 1px solid black;
  border: none;
  color: white;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-family: "LightBold";

  @media ${breakPoints.phone} {
    width: 320px;
    height: 320px;
  }
`;

export const PostButton = styled.button`
  width: 171px;
  height: 32px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  font-size: 17px;
  font-weight: 700;
  background-color: white;
  color: black;
  cursor: pointer;
  border: 3px solid black;

  @media ${breakPoints.phone} {
    width: 85px;
    height: 24px;
    font-size: 15px;
  }
`;

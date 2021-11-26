import styled from "@emotion/styled";

export const Wrapper = styled.div`
  padding-top: 80px;
`;

export const BestTitle = styled.div`
  display: flex;
  justify-content: center;
  font-size: 36px;
  font-weight: 700;
  line-height: 42.19px;
  font-family: "LightBold";
  margin-bottom: 50px;
  font-family: "LightBold";
`;

export const ListWrapper = styled.div`
  width: 100%;
  /* border: 1px solid red; */
  display: flex;
  flex-direction: row;
`;

export const LeftWrapper = styled.div`
  width: 900px;
  margin-right: 30px;
`;

export const TableTop = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 40px;
`;

interface IProps {
  isVisible: boolean;
}

export const OnSale = styled.div`
  margin-right: 20px;
  font-weight: 500;
  font-style: normal;
  font-size: 18px;
  line-height: 26.64px;
  cursor: pointer;
  color: ${(props: IProps) => (props.isVisible === true ? "black" : "#f04237")};
`;

interface IProps {
  isVisible: boolean;
}

export const Sold = styled.div`
  font-weight: 500;
  font-style: normal;
  font-size: 18px;
  line-height: 26.64px;
  cursor: pointer;
  color: ${(props: IProps) => (props.isVisible === true ? "#f04237" : "black")};
`;

export const TableSell = styled.div`
  /* width: 880px;
  display: flex;
  flex-direction: row;
  border-bottom: 2px solid black;
  padding-top: 20px;
  padding-bottom: 20px; */
  width: 160px;
  height: 350px;
  border: 1px solid lightcoral;
  display: flex;
  flex-direction: column;
  margin-right: 20px;
`;

export const ProductImage = styled.img`
  width: 160px;
  height: 160px;
  border: 1px solid black;
  border: none;
  margin-right: 40px;
`;

export const NoneImage = styled.div`
  width: 160px;
  height: 160px;
  border: 1px solid black;
  border: none;
  /* box-shadow: 1px 1px 1px 1px; */
  margin-right: 40px;
  color: white;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-family: "LightBold";
`;

export const Info = styled.div`
  /* width: 650px; */
  /* width: 100%; */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Detail = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const PriceInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const PriceIcon = styled.img`
  width: 18px;
  height: 18px;
  margin-right: 11px;
  -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
  filter: grayscale(100%);
`;

export const Price = styled.div`
  font-weight: 700;
  font-style: normal;
  font-size: 24px;
  line-height: 35.52px;
`;

export const Name = styled.div`
  font-weight: 500;
  font-style: normal;
  font-size: 24px;
  line-height: 35.52px;
  margin-bottom: 4px;
`;

export const Remarks = styled.div`
  font-weight: 500;
  font-style: normal;
  font-size: 16px;
  line-height: 23.68px;
  margin-bottom: 8px;
  color: #4f4f4f;
`;

export const Tags = styled.div`
  font-weight: 500;
  font-style: normal;
  font-size: 16px;
  line-height: 23.68px;
  margin-bottom: 24px;
  color: #bdbdbd;
`;

export const SellerInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border: 1px solid blue;
`;

export const AvatarInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 22px;
`;

export const Avatar = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 6px;
  border-radius: 70%;
`;

export const AvatarNone = styled.div`
  width: 20px;
  height: 20px;
  margin-right: 6px;
  border-radius: 70%;
  background-color: black;
`;

export const Seller = styled.div`
  font-weight: 500;
  font-style: normal;
  font-size: 16px;
  line-height: 23.68px;
`;

export const HeartInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const HeartButton = styled.img`
  width: 20px;
  height: 18.35px;
  margin-right: 6px;
`;

export const HeartCount = styled.div`
  font-weight: 400;
  font-style: normal;
  font-size: 16px;
  line-height: 23.68px;
`;

export const PostButton = styled.button`
  width: 171px;
  height: 52px;
  font-size: 17px;
  font-weight: 700;
  background-color: white;
  color: black;
  /* border-radius: 15px; */
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  cursor: pointer;
  /* border: 1px solid #f2f2f2; */
  border: 3px solid black;
  margin-top: 50px;
  margin-left: 480px;
  margin-bottom: 1000px;
`;

export const Wrap = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

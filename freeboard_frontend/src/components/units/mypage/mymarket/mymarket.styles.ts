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
  padding-left: 18px;
  padding-bottom: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  /* border-bottom: 1px solid red; */
`;

export const CategoryWrapper = styled.div`
  width: 200px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

interface IProps {
  isVisible: boolean;
}

export const StateMyItem = styled.div`
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  color: ${(props: IProps) => (props.isVisible === true ? "black" : "#f04237")};
`;

export const State = styled.div`
  font-weight: 600;
  font-size: 16px;
`;

export const StatePickedItem = styled.div`
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  color: ${(props: IProps) => (props.isVisible === true ? "#f04237" : "black")};
`;

export const ItemContent = styled.div`
  width: 98%;
  border: 1px solid red;
  border: none;
  font-size: 12px;
  margin-left: 20px;
  border-top: 2px solid black;
  border-bottom: 2px solid black;
  padding-top: 10px;
`;

export const PickedContent = styled.div`
  width: 98%;
  border: 1px solid red;
  border: none;
  font-size: 12px;
  margin-left: 20px;
  border-top: 2px solid black;
  border-bottom: 2px solid black;
  padding-top: 10px;
`;

export const RowCategory = styled.div`
  height: 27px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-weight: 900;
  padding-bottom: 10px;
  border-bottom: 2px solid black;
`;

export const ColumnIndex = styled.div`
  /* border: 1px solid red; */
  width: 5%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  /* padding: 5px; */
`;

export const ColumnName = styled.div`
  /* border: 1px solid red; */
  width: 25%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  /* padding: 5px; */
`;

export const ColumnSold = styled.div`
  border: 1px solid red;
  border: none;
  width: 10%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: black;
  color: #f04237;
  padding: 2px 0px 2px 0px;
`;

export const ColumnNone = styled.div`
  width: 10%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  /* border: 1px solid red; */
`;

export const ColumnPrice = styled.div`
  /* border: 1px solid red; */
  width: 10%;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const ColumnSeller = styled.div`
  /* border: 1px solid red; */
  width: 10%;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const CloumnDate = styled.div`
  /* border: 1px solid red; */
  width: 13%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  /* padding: 5px; */
`;

export const Row = styled.div`
  height: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid black;
`;

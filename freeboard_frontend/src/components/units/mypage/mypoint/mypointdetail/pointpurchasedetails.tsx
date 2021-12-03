import { gql, useQuery } from "@apollo/client";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  width: 900px;
  border: 1px solid red;
  border: none;
  font-size: 12px;
  margin-left: 20px;
  border-top: 2px solid black;
  /* border-bottom: 2px solid black; */
  padding-top: 10px;
`;
const RowCategory = styled.div`
  height: 27px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-weight: 900;
  padding-bottom: 10px;
  border-bottom: 2px solid black;
`;
const Row = styled.div`
  height: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid black;
`;
const ColumnDate = styled.div`
  width: 12%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  /* border: 1px solid red; */
`;
const ColumnStatus = styled.div`
  width: 30%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  /* border: 1px solid red; */
`;

const ColumnInnerStatus = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ColumnList = styled.div`
  width: 12%;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const ClounmSeller = styled.div`
  width: 12%;
  display: flex;
  flex-direction: row;
`;

const ColumnHistory = styled.div`
  width: 16%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  /* border: 1px solid red; */
`;
const ClounmBalance = styled.div`
  width: 20%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  /* border: 1px solid red; */
`;

const FETCH_POINT_TRANSACTIONS_OF_BYUING = gql`
  query fetchPointTransactionsOfBuying($page: Int) {
    fetchPointTransactionsOfBuying(page: $page) {
      _id
      useditem {
        name
        # seller {
        #   name
        # }
      }
      balance
      createdAt
      amount
    }
  }
`;

export default function PointPurchaseDetails() {
  const { data } = useQuery(FETCH_POINT_TRANSACTIONS_OF_BYUING, {
    variables: { page: 1 },
  });
  return (
    <Wrapper>
      <RowCategory>
        <ColumnDate>거래일</ColumnDate>
        <ColumnStatus>상품명</ColumnStatus>
        <ColumnList>거래내역</ColumnList>
        <ColumnHistory>거래 및 충전 내역</ColumnHistory>
        <ClounmSeller>판매자</ClounmSeller>
      </RowCategory>
      {data?.fetchPointTransactionsOfBuying.map((el) => (
        <Row key={el._id}>
          <ColumnDate>{el.createdAt.slice(0, 10)}</ColumnDate>
          <ColumnStatus>
            <ColumnInnerStatus>{el.useditem.name}</ColumnInnerStatus>
          </ColumnStatus>
          <ColumnList>{el.amount.toLocaleString("ko-KR")} 원</ColumnList>
          <ColumnHistory>{el.balance.toLocaleString("ko-KR")} 원</ColumnHistory>
          <ClounmSeller></ClounmSeller>
        </Row>
      ))}
    </Wrapper>
  );
}

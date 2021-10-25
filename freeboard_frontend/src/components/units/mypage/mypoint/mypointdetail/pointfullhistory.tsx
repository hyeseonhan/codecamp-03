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
  width: 12%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  /* border: 1px solid red; */
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

const FETCH_POINT_TRANSACTIONS = gql`
  query fetchPointTransactions($page: Int) {
    fetchPointTransactions(page: $page) {
      _id
      status
      statusDetail
      balance
      createdAt
      amount
    }
  }
`;

export default function PointFullHistory() {
  const { data } = useQuery(FETCH_POINT_TRANSACTIONS, {
    variables: { page: 1 },
  });
  return (
    <Wrapper>
      <RowCategory>
        <ColumnDate>날짜</ColumnDate>
        <ColumnStatus>상태</ColumnStatus>
        <ColumnHistory>거래 및 충전 내역</ColumnHistory>
        <ClounmBalance>잔액</ClounmBalance>
      </RowCategory>
      {data?.fetchPointTransactions.map((el) => (
        <Row key={el._id}>
          <ColumnDate>{el.createdAt.slice(0, 10)}</ColumnDate>
          {el.amount < 0 ? (
            <>
              <ColumnStatus>{el.status}</ColumnStatus>
              <ColumnHistory>{el.amount.toLocaleString("ko-KR")}</ColumnHistory>
            </>
          ) : (
            <>
              <ColumnStatus>{el.status}</ColumnStatus>
              <ColumnHistory>{el.amount.toLocaleString("ko-KR")}</ColumnHistory>
            </>
          )}
          <ClounmBalance>₩{el.balance.toLocaleString("ko-KR")}</ClounmBalance>
        </Row>
      ))}
    </Wrapper>
  );
}

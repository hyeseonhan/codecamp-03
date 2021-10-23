import { useMutation, useQuery } from "@apollo/client";
import Head from "next/head";
import { useState } from "react";
import PointChargeUI from "./pointcharge.presenter";
import {
  CREATE_POINT_TRANSACTION_OF_LOADING,
  FETCH_USER_LOGGEDIN,
} from "./pointcharge.queries";

declare const window: typeof globalThis & {
  IMP: any;
};

export default function PointCharge() {
  const [mypoint, setMyPoint] = useState();

  const [createPointTransactionOfLoading] = useMutation(
    CREATE_POINT_TRANSACTION_OF_LOADING
  );
  const { data } = useQuery(FETCH_USER_LOGGEDIN);

  function onClickPayment() {
    var IMP = window.IMP; // 생략 가능
    IMP.init("imp49910675"); // 예: imp00000000

    // IMP.request_pay(param, callback) 결제창 호출
    IMP.request_pay(
      {
        // param
        pg: "html5_inicis", // 계약한 pg
        pay_method: "card", // 결제 방식
        // merchant_uid: "ORD20180131-0000011", 중복되면 안되므로 삭제하거나 주석
        name: "포인트 ${mypoint}",
        amount: mypoint, // state로 바꾸면 됨
        // buyer_email: "gildong@gmail.com",
        // buyer_name: "홍길동",
        // buyer_tel: "010-4242-4242",
        // buyer_addr: "서울특별시 강남구 신사동",
        // buyer_postcode: "01181",
      },
      function (rsp: any) {
        // callback
        if (rsp.success) {
          console.log(rsp); // rsp안에 결제 정보가 다 담겨져있다.
          // 이것을 이용해 백엔드에 넣어주면 이용자의 결제내역을 확인할 수 도있고
          // 포인트제도 등 을 적용할 수 있다.
          createPointTransactionOfLoading({
            variables: {
              impUid: String(rsp.imp_uid),
            },
          });
          alert("포인트 ${${mypoint} 이 충전되었습니다.");

          //   mutation() => createPointTransactionOfLoading
          //     ...,
          // 결제 성공 시 로직,
          // ...
        } else {
          // ...,
          // 결제 실패 시 로직,
          // ...
        }
      }
    );
  }

  function onChangeMyPoint(event) {
    setMyPoint(event.target.value);
  }

  return (
    <>
      <Head>
        <script
          type="text/javascript"
          src="https://code.jquery.com/jquery-1.12.4.min.js"
        ></script>
        <script
          type="text/javascript"
          src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"
        ></script>
      </Head>
      <PointChargeUI
        data={data}
        mypoint={mypoint}
        onClickPayment={onClickPayment}
        onChangeMyPoint={onChangeMyPoint}
      />
      ;
    </>
  );
}

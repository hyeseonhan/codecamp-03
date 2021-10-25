import { useState } from "react";
import MyPointUI from "./mypoint.presenter";

export default function MyPoint() {
  const [isVisible, setIsVisible] = useState(true);
  const [isVisibled, setIsVisibled] = useState(false);

  function onClickFullHistory() {
    setIsVisible(true);
    setIsVisibled(false);
  }

  function onClickChargingDetails() {
    setIsVisible(false);
    setIsVisibled(false);
  }

  function onClickPurchaseDetails() {
    setIsVisible(false);
    setIsVisibled(true);
  }

  function onClickSalesDetails() {
    setIsVisible(true);
    setIsVisibled(true);
  }

  return (
    <MyPointUI
      isVisible={isVisible}
      isVisibled={isVisibled}
      onClickFullHistory={onClickFullHistory}
      onClickChargingDetails={onClickChargingDetails}
      onClickPurchaseDetails={onClickPurchaseDetails}
      onClickSalesDetails={onClickSalesDetails}
    />
  );
}

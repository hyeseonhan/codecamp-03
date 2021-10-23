import { useQuery } from "@apollo/client";
import { useState } from "react";
import MyMarketUI from "./mymarket.presenter";
import {
  FETCH_USED_ITEMS_I_SOLD,
  FETCH_USED_ITEM_I_PICKED,
} from "./mymarket.queries";

export default function MyMarket() {
  const [isVisible, setIsVisible] = useState(false);
  const { data } = useQuery(FETCH_USED_ITEMS_I_SOLD, {
    variables: { page: 1 },
  });

  const { data: Ipickedata } = useQuery(FETCH_USED_ITEM_I_PICKED, {
    variables: { search: "" },
  });

  function onClickMyItem() {
    setIsVisible(false);
  }

  function onClickPickedItem() {
    setIsVisible(true);
  }

  return (
    <MyMarketUI
      data={data}
      Ipickedata={Ipickedata}
      onClickMyItem={onClickMyItem}
      onClickPickedItem={onClickPickedItem}
      isVisible={isVisible}
    />
  );
}

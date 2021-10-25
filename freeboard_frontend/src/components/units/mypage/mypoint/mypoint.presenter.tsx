import PointFullHistory from "../mypoint/mypointdetail/pointfullhistory";
import PointChargingDetails from "./mypointdetail/pointchargingdetails";
import PointPurchaseDetails from "./mypointdetail/pointpurchasedetails";
import PointSalesDetails from "./mypointdetail/pointsalesdetails";
import {
  Wrapper,
  LeftWrapper,
  Title,
  InnerLeftWrapper,
  State,
  State1,
  State2,
  State3,
  State4,
  StateContent,
} from "./mypoint.styles";

export default function MyPointUI(props) {
  return (
    <Wrapper>
      <LeftWrapper>
        <Title>ACCOUNT</Title>
        <InnerLeftWrapper>
          <State1
            onClick={props.onClickFullHistory}
            isVisible={props.isVisible}
            isVisibled={props.isVisibled}
          >
            THE FULL HISTORY
          </State1>
          <State>|</State>
          <State2
            onClick={props.onClickChargingDetails}
            isVisible={props.isVisible}
            isVisibled={props.isVisibled}
          >
            CHARGING DETAILS
          </State2>
          <State>|</State>
          <State3
            onClick={props.onClickPurchaseDetails}
            isVisible={props.isVisible}
            isVisibled={props.isVisibled}
          >
            PURCHASE DETAILS
          </State3>
          <State>|</State>
          <State4
            onClick={props.onClickSalesDetails}
            isVisible={props.isVisible}
            isVisibled={props.isVisibled}
          >
            SALES DETAILS
          </State4>
        </InnerLeftWrapper>
        <StateContent>
          {props.isVisible && !props.isVisibled && <PointFullHistory />}
          {!props.isVisible && !props.isVisibled && <PointChargingDetails />}
          {!props.isVisible && props.isVisibled && <PointPurchaseDetails />}
          {props.isVisible && props.isVisibled && <PointSalesDetails />}
        </StateContent>
      </LeftWrapper>
    </Wrapper>
  );
}

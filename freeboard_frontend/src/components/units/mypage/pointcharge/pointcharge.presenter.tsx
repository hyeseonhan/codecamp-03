import { Wrapper, Title, Amount, PayButton } from "./pointcharge.styles";

export default function PointChargeUI(props) {
  return (
    <Wrapper>
      <Title>PAYMENT AMOUNT</Title>
      <Amount
        type="text"
        placeholder="Enter the amount to charge!"
        onChange={props.onChangeMyPoint}
      ></Amount>
      <PayButton onClick={props.onClickPayment}>PAYMENT</PayButton>
    </Wrapper>
  );
}

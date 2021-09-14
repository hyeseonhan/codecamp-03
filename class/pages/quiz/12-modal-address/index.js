import DaumPostcode from "react-daum-postcode";

export default function ModalAddressPage() {
  const handleComplete = (data) => {
    console.log(data);
  };

  return <DaumPostcode autoClose />;
}

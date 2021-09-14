import { useState } from "react";
import DaumPostcode from "react-daum-postcode";
import { Modal } from "antd";

export default function ModalAddressPrevPage() {
  const [myZipcode, setMyZipcode] = useState("");
  const [myAddress, setMyAddress] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleComplete = (data) => {
    setMyZipcode(data.address);
    setMyAddress(data.zonecode);
    console.log(data.zonecode);
    console.log(data.address);

    setIsOpen((prev) => !prev);
  };

  // function onOpenZipcode() {
  //   setIsOpen((prev) => !prev); // prev 기존거 갖고와서 반대로 바꿔줌
  // }

  // function onCloseZipcode() {
  //   setIsOpen((prev) => !prev);
  // }  아래에 하나로 toggle 사용해서 합쳐줌(리팩토링)

  function onToggleOpenZipcode() {
    setIsOpen((prev) => !prev);
  }

  return (
    <>
      <button onClick={onToggleOpenZipcode}>우편번호 검색</button>
      {isOpen && (
        <Modal visible={true} onCancel={onToggleOpenZipcode}>
          <DaumPostcode onComplete={handleComplete} />;
        </Modal>
      )}
    </>
  );
}

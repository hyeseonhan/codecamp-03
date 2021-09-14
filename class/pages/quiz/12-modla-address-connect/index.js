import { Button, Modal } from "antd";
import { useState } from "react";
import DaumPostcode from "react-daum-postcode";

export default function ModalAlertPage() {
    const [myZipcode, setMyZipcode] = useState("");
  const [myAddress, setMyAddress] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleComplete = (data) => {
    setMyZipcode(data.address);
    setMyAddress(data.zonecode);
    console.log(data.zonecode);
    console.log(data.address);

 

  function onOpenZipcode() {
    setIsOpen(true);
  }

  function onCloseZipcode() {
    setIsOpen(false);
  }

  function onToggleOpenZipcode() {
    setIsOpen((prev) => !prev);
  }

  return (
    <>
      <Button onClick={onOpenZipcode}>모달열기</Button>
      <Modal visible={true} title="주소검색">
        <DaumPostcode
          onComplete={handleComplete}
          onCancel={onToggleOpenZipcode}
        />
      </Modal>
    </>
  );
}

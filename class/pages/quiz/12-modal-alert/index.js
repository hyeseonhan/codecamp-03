import { Modal, Button } from "antd";
import { useState } from "react";

export default function ModalAlertPage() {
  const [isModalVisible, setisModalVisible] = useState("false");

  const showModal = () => {
    setisModalVisible(true);
  };

  const closeModal = () => {
    setisModalVisible(false);
  };
  return (
    <>
      <Button onClick={showModal}>모달열기</Button>
      <Modal visible={isModalVisible} onCancel={closeModal}>
        게시글이 등록되었습니다.
      </Modal>
    </>
  );
}

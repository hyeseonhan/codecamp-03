import { Calendar } from "antd";
import styled from "@emotion/styled";
import { useState } from "react";

const MyCalendar = styled(Calendar)`
  width: 300px;
  border: 1px solid #f0f0f0;
  border-radius: 2px;
`;

export default function CalendarPage() {
  const [date, setDate] = useState("");

  const onSelect = (date) => {
    setDate(date.format("YYYY-MM-DD"));
  };

  function onPanelChange(value, mode) {
    console.log(value.format("YYYY-MM-DD"), mode);
  }
  return (
    <div>
      <MyCalendar
        fullscreen={false}
        onPanelChange={onPanelChange}
        onSelect={onSelect}
      />
      {date ? <span className="date">{date}</span> : ""}
    </div>
  );
}

import { Rate } from "antd";
import { useState } from "react";

const desc = ["terrible", "bad", "normal", "good", "wonderful"];

export default function LibraryStartPage() {
  const [value, setValue] = useState(3);

  const handleChange = (value) => {
    setValue(value);
  };

  return (
    <span>
      <Rate onChange={handleChange} value={value} />
      {/* <Rate tooltips={desc} onChange={handleChange} value={value} /> */}
      {/* {value ? <span className="ant-rate-text">{desc[value - 1]}</span> : ""} */}
    </span>
  );
}

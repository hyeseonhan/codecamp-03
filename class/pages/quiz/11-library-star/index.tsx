import { Rate } from "antd";
import { useState } from "react";

const desc = ["1점", "2점", "3점", "4점", "5점"];

export default function LibraryStarPage() {
  const [value, setValue] = useState(3);

  const handleChange = (value) => {
    setValue(value);
    alert("예," + value + "점");
  };

  return (
    <span>
      <Rate onChange={handleChange} value={value} />
      <br />
      {value ? <span className="star">{desc[value - 1]}</span> : ""}
    </span>
  );
}

// class Rater extends React.Component {
//   state = {
//     value: 3,
//   };

//   handleChange = value => {
//     this.setState({ value });
//   };

//   render() {
//     const { value } = this.state;
//     return (

//     );
//   }
// }

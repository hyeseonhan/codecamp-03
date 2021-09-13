import { ClockCircleOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";

const MyIcon = styled(ClockCircleOutlined)`
  font-size: 60px;
  color: red;
`;

export default function LibraryIconPage() {
  return (
    <div>
      <MyIcon />
    </div>
  );
}

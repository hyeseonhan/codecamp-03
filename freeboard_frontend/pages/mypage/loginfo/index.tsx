import { withAuth } from "../../../src/components/commons/hocs/withAuth";
import LogInfo from "../../../src/components/units/mypage/loginfo/LogInfo.container";

const LogInfoPage = () => {
  return <LogInfo />;
};

export default withAuth(LogInfo);

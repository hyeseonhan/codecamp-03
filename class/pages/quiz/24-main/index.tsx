import { quizwithAuth } from "../../../src/components/commons/hocs/quiz-withAuth";

const MainPage = () => {
  return <div>메인페이지입니다.</div>;
};

export default quizwithAuth(MainPage);

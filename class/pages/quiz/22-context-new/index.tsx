import { createContext } from "react";
import Write from "../../../src/components/units/22-quiz-context-write/Write.container";

export const MyContext = createContext(null);
export default function ContextNew() {
  const value = {
    isEdit: false,
  };
  return (
    <MyContext.Provider value={value}>
      <Write />
    </MyContext.Provider>
  );
}

// export default function ContextNew() {
//   return <Write isEdit={false} />;
// }

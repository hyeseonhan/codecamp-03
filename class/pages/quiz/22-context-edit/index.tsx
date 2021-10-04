import { createContext } from "react";
import Write from "../../../src/components/units/22-quiz-context-write/Write.container";

export const MyContext = createContext(null);
export default function ContextEdit() {
  const value = {
    isEdit: true,
  };

  return (
    <MyContext.Provider value={value}>
      <Write />
    </MyContext.Provider>
  );
}

// export default function ContextEdit() {
//   return <Write isEdit={true} />;
// }

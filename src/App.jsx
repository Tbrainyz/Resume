import { useState } from "react";

import "./App.css";
import Resume from "./Resume";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Resume />
    </>
  );
}

export default App;

import { useState } from "react";

import "./App.css";
import { Button, Text } from "./ui";
import { Generator } from "./components/Generator";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div></div>
      <Generator />

      {/* <Text>Today is Monday</Text>
      <Button label="One" bgColor="carrot" color="clouds" />
      <Button label="Two" bgColor="clouds" color="carrot" />
      <Button label="Three" bgColor="peter-river" color="clouds" />

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div> */}
    </>
  );
}

export default App;

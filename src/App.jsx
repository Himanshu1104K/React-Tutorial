import { useState } from "react";
import "./App.css";
import { Text } from "./Text";

// There are three states of the componets:
// 1. Mounting state
// 2. Updating state
// 3. UnMounting state
function App() {
  const [showText, setShowText] = useState(false);
  return (
    <>
      <div className="App">
        <button
          onClick={() => {
            setShowText(!showText);
          }}
        >
          Show Text
        </button>
        {showText && <Text />}
      </div>
    </>
  );
}

export default App;

import { React, useState, useEffect } from "react";

export function Text() {
  const [text, SetText] = useState("");
  useEffect(() => {
    console.log("Component Mounted");

    return () => {
      console.log("Component Unmounted");
    };
  }, []);

  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          SetText(e.target.value);
        }}
      />
      <h1>{text}</h1>
    </div>
  );
}

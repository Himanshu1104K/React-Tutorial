import React, { useState, useContext } from "react";
import { AppContext } from "../App";
export const ChangeProfile = () => {
  const { setUsername } = useContext(AppContext);
  const [newUserName, setNewUserName] = useState("");
  return (
    <div>
      <input
        type="text"
        onChange={(event) => {
          setNewUserName(event.target.value);
        }}
      />
      <button
        onClick={() => {
          setUsername(newUserName);
        }}
      >
        Change UserName
      </button>
    </div>
  );
};

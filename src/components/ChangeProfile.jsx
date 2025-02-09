import React, { useState } from "react";

export const ChangeProfile = (props) => {
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
          props.setUsername(newUserName);
        }}
      >
        Change UserName
      </button>
    </div>
  );
};

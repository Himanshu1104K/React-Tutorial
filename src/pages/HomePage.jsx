import React from "react";

export const HomePage = (props) => {
  return (
    <div>
      <h1>This is the Home Page</h1>
      <h1>The user is : {props.username}</h1>
    </div>
  );
};

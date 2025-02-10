import { useContext } from "react";
import React from "react";
import { AppContext } from "../App";
export const HomePage = () => {
  const { username } = useContext(AppContext);
  return (
    <div>
      <h1>This is the Home Page</h1>
      <h1>The user is : {username}</h1>
    </div>
  );
};

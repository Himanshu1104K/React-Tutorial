import React from "react";
import { ChangeProfile } from "../components/ChangeProfile";

export const Profile = (props) => {
  return (
    <div>
      <h1>PROFILE, user is : {props.username}</h1>
      <ChangeProfile setUsername={props.setUsername} />
    </div>
  );
};

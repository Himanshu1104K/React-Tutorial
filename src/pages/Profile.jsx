import React, { useContext } from "react";
import { ChangeProfile } from "../components/ChangeProfile";

import { AppContext } from "../App";

export const Profile = () => {
  const { username } = useContext(AppContext);
  return (
    <div>
      <h1>PROFILE, user is : {username}</h1>
      <ChangeProfile />
    </div>
  );
};

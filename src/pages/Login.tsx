import { useState } from "react";
import { login, logout } from "../store";
import { useDispatch } from "react-redux";
export const Login = () => {
  const [newUserName, setNewUserName] = useState("");
  const dispatch = useDispatch();
  return (
    <div>
      <h1>This is the Login Page.</h1>
      <input
        type="text"
        onChange={(e) => {
          setNewUserName(e.target.value);
        }}
      />
      <button onClick={() => dispatch(login({ username: newUserName }))}>
        Submit Login
      </button>
      <button onClick={() => dispatch(logout())}>Logout</button>
    </div>
  );
};

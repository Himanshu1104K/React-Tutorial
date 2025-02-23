import { useSelector } from "react-redux";
export const HomePage = () => {
  const username = useSelector((state: any) => {
    return state.user.value.username;
  });
  return (
    <div>
      <h1>This is the Home Page.</h1>
      <h1>Hello {username}</h1>
    </div>
  );
};

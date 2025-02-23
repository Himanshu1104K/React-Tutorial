import { Link } from "react-router-dom";
export const NavBar = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </div>
  );
};

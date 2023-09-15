import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <NavLink to="users">Users</NavLink>
      <NavLink to="sports">Sports</NavLink>
    </nav>
  );
};

export default Navigation;

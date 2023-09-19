import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="sport">Sport</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;

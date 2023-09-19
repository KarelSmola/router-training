import { Link } from "react-router-dom";

const SportItem = ({ id, sportName }) => {
  return (
    <li>
      <Link to={id}>{sportName}</Link>
    </li>
  );
};

export default SportItem;

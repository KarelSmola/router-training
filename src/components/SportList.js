import { useWelcome } from "../contexts/WelcomeContext";
import SportItem from "./SportItem";

const SportList = () => {
  const { sports } = useWelcome();

  return (
    <ul>
      {sports.map((sport) => (
        <SportItem key={sport.id} id={sport.id} sportName={sport.name} />
      ))}
    </ul>
  );
};

export default SportList;

import SportItem from "./SportItem";

const SportList = ({ sports }) => {
  return (
    <ul>
      {sports.map((sport) => (
        <SportItem key={sport.id} id={sport.id} sportName={sport.name} />
      ))}
    </ul>
  );
};

export default SportList;

import React from "react";
import { useParams } from "react-router-dom";

const Sport = ({ sports }) => {
  const { id } = useParams();

  const filterSport = sports.filter((sport) => {
    if (sport.id === id) {
      return sport.name;
    }
  });

  return (
    <ul>
      {filterSport.map((sport) => (
        <li key={sport.id}>
          <p>{sport.id}</p>
          <p>{sport.name}</p>
        </li>
      ))}
    </ul>
  );
};

export default Sport;

import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { useWelcome } from "../contexts/WelcomeContext";

const AppLayout = () => {
  const { people } = useWelcome();

  return (
    <div>
      {people.map((person) => (
        <div key={person.firstName}>
          <p>{person.firstName}</p>
          <p>{person.lastName}</p>
          <p>{person.title}</p>
          <p>{person.auto}</p>
        </div>
      ))}
      <Navigation />
      <Footer />
    </div>
  );
};

export default AppLayout;

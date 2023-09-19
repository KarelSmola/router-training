import { useState, createContext, useContext } from "react";
const { faker } = require("@faker-js/faker");

// console.log(faker.vehicle.vehicle());

const createPeople = () => {
  return {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    title: faker.person.jobTitle(),
    auto: faker.vehicle.vehicle(),
  };
};

const WelcomeContext = createContext();

const data = [
  { id: "1", name: "hockey", individual: false },
  { id: "2", name: "football", individual: false },
  { id: "3", name: "MTB", individual: true },
];

const WelcomeContextProvider = ({ children }) => {
  const [sports, setSports] = useState(data);
  const [people, setPeople] = useState(() =>
    Array.from({ length: 10 }, () => createPeople())
  );

  return (
    <WelcomeContext.Provider
      value={{ people, sports, setSports, welcomeMessage: "Hello world" }}
    >
      {children}
    </WelcomeContext.Provider>
  );
};

const useWelcome = () => {
  const context = useContext(WelcomeContext);
  return context;
};

export { WelcomeContextProvider, WelcomeContext, useWelcome };

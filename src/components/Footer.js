import { useWelcome } from "../contexts/WelcomeContext";

const Footer = () => {
  const { welcomeMessage } = useWelcome();
  return <div>Footer {welcomeMessage}</div>;
};

export default Footer;

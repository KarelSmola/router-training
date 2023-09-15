import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./pages/AppLayout";
import Users from "./components/Users";
import SportList from "./components/SportList";
import SportsIndividual from "./components/SportsIndividual";
import SportsCollective from "./components/SportsCollective";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<AppLayout />} />
        <Route path="users" element={<Users />} />
        <Route path="sports" element={<SportList />}>
          <Route path="individual" element={<SportsIndividual />} />
          <Route path="collective" element={<SportsCollective />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

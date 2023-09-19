import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SportList from "./components/SportList";
import Sport from "./components/Sport";
import Users from "./components/Users";
import AppLayout from "./pages/AppLayout";

const data = [
  { id: "1", name: "hockey", individual: false },
  { id: "2", name: "football", individual: false },
  { id: "3", name: "MTB", individual: true },
];

const App = () => {
  const [sports, setSports] = useState(data);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<AppLayout />} />
        <Route path="sport" element={<SportList sports={data} />} />
        <Route path="sport/:id" element={<Sport sports={data} />} />
        <Route path="users" element={<Users />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

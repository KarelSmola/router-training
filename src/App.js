import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SportList from "./components/SportList";
import Sport from "./components/Sport";
import Users from "./components/Users";
import AppLayout from "./pages/AppLayout";
import { WelcomeContextProvider } from "./contexts/WelcomeContext";

const App = () => {
  return (
    <WelcomeContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<AppLayout />} />
          <Route path="sport" element={<SportList />} />
          <Route path="sport/:id" element={<Sport />} />
          <Route path="users" element={<Users />} />
        </Routes>
      </BrowserRouter>
    </WelcomeContextProvider>
  );
};

export default App;

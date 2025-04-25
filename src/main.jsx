import { StrictMode } from "react";
import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import LoginPage from "./components/LoginPage";
import AddPage from "./components/AddPage";
import ShowPage from "./components/ShowPage";
import RegisterPage from './components/RegisterPage';
import LogoutPage from './components/LogoutPage.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';


createRoot(document.getElementById("root")).render(
  // <StrictMode>
  //   <App />
  // </StrictMode>
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="register" element={<RegisterPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="add" element={<AddPage />} />
          <Route path="show" element={<ShowPage />} />
          <Route path="logout" element={<LogoutPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Layout } from "../Components/HOC/Layout";
import { Home } from "../Pages/Home";
import { AboutUs } from "../Pages/AboutUs";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="aboutUs" element={<AboutUs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

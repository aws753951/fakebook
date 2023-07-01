import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./output.css";

import Layout from "./components/Layout";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FrontPage from "./pages/frontpage";
import SearchPage from "./pages/searchpage";
import MainPage from "./pages/mainpage";

function App() {
  return (
    <Router>
      <Routes>
        {" "}
        <Route path="/" element={<FrontPage />} component={FrontPage} />{" "}
        <Route path="/main" element={<MainPage />} component={MainPage} />
        <Route path="/search" element={<SearchPage />} component={SearchPage} />
      </Routes>
    </Router>
  );
}

export default App;

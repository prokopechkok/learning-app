import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages";
import Courses from "./pages/courses";
import Course1 from "./pages/course1";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/course1" element={<Course1 />} />
      </Routes>
    </Router>
  );
}
export default App;

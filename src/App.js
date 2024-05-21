import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Policy from "./Pages/Policy";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy-policy" element={<Policy />} />
        </Routes>
      </Router>
      <p style={{ textAlign: "Center" }}>Contact: adityapundir2k@gmail.com</p>
    </>
  );
}

export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RootLayout from "./_root/RootLayout";
import Home from "./_root/pages/Home";

const App = () => {
  return (
    <>
      <Router basename="/-extension-manager">
        <Routes>
          <Route element={<RootLayout />}>
            <Route path="/" element={<Home />}></Route>
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;

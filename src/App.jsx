import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import containers layout
import Layout from "./containers/Layout";

// import pages
import Dashboard from "./pages/dashboard/Dashboard";
import Swiper from "./pages/dashboard/Swiper";
import Information from "./pages/dashboard/Information";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="swiper" element={<Swiper />} />
          <Route path="information" element={<Information />} />
        </Route>
      </Routes>
    </Router>
  );
}

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import containers layout
import Layout from "./containers/Layout";

// import pages
import Dashboard from "./pages/dashboard/Dashboard";
import Forms from "./pages/dashboard/Forms";
import Cards from "./pages/dashboard/Cards";
import Charts from "./pages/dashboard/Charts";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="forms" element={<Forms />} />
          <Route path="cards" element={<Cards />} />
          <Route path="charts" element={<Charts />} />
        </Route>
      </Routes>
    </Router>
  );
}

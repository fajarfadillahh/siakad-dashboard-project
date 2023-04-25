import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import theme
import ThemeProvider from "./theme";

// import containers layout
import Layout from "./containers/Layout";

// import pages
import Dashboard from "./pages/dashboard/admin/Dashboard";
import Swiper from "./pages/dashboard/admin/Swiper";
import Information from "./pages/dashboard/admin/Information";

import Login from "./pages/Login";
import Register from "./pages/Register";

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          {/* main pages */}
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="swiper" element={<Swiper />} />
            <Route path="information" element={<Information />} />
          </Route>

          {/* login & register pages */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

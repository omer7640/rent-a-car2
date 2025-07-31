import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Shop from "../Pages/Shop";
import Selection from "../Pages/Selection";
import IndvidualSelection from "../Components/Selection/IndvidualSelection";

export default function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/selection" element={<Selection />} />
        <Route path="/selection/:id" element={<IndvidualSelection />} />
      </Routes>
    </div>
  );
}

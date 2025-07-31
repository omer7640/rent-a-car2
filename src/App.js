import React, { useState, useEffect } from "react";
import "./App.css";
import NavBar from "./Components/Shared/NavBar";
import AllRoutes from "./routes/AllRoutes";

function App() {
  return (
    <div>
      <section>
        <AllRoutes />
      </section>
    </div>
  );
}

export default App;

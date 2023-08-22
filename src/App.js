import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./componets/layout/Navbar";
import Dashboard from "./componets/pages/Dashboard";
import { useState } from "react";
import { ThemeContext } from "./context/ThemeContext";
import { StockContext } from "./context/StockContext";

function App() {
  const [theme, settheme] = useState(false);
  const [stock, setstock] = useState("FB");
  return (
    <BrowserRouter>
      <ThemeContext.Provider value={{ theme, settheme }}>
        <StockContext.Provider value={{ stock, setstock }}>
          <Navbar />
          <Dashboard />
        </StockContext.Provider>
      </ThemeContext.Provider>
    </BrowserRouter>
  );
}

export default App;

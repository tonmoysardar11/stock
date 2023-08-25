import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./componets/layout/Navbar";
import Dashboard from "./componets/pages/Dashboard";
import { useState } from "react";
import { ThemeContext } from "./context/ThemeContext";
import { StockContext } from "./context/StockContext";
import Footer from "./componets/layout/Footer";

function App() {
  const [theme, settheme] = useState(false);
  const [stock, setstock] = useState("AAPL");
  return (
    <BrowserRouter>
      <StockContext.Provider value={{ stock, setstock }}>
        <ThemeContext.Provider value={{ theme, settheme }}>
          <Navbar />
          <Dashboard />
          <Footer/>
        </ThemeContext.Provider>
      </StockContext.Provider>
    </BrowserRouter>
  );
}

export default App;

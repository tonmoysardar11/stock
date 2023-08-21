import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Navbar from './componets/layout/Navbar';
import Dashboard from './componets/pages/Dashboard';
import { useState } from 'react';
import { ThemeContext } from './context/ThemeContext';


function App() {

  const [theme, settheme] = useState(false);
  return (
    <BrowserRouter>
    <ThemeContext.Provider value={{theme,settheme}}>
    <Navbar/>
    <Dashboard/>
    </ThemeContext.Provider>
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Navbar from './componets/layout/Navbar';
import Dashboard from './componets/pages/Dashboard';


function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Dashboard/>
    </BrowserRouter>
  );
}

export default App;

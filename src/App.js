import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Navbar from './componets/layout/Navbar';


function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <p>Stock</p>
    </BrowserRouter>
  );
}

export default App;

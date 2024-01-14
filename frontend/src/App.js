import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route exact path="/" element={<Navbar/>}></Route>
    </Routes>
  </BrowserRouter>
    </>
  );
}

export default App;

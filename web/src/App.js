import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import PreHome from './Pages/PreHome';
import Home from './Pages/Home';

function App() {
  return (
    <Routes>
      <Route path="/" element={<PreHome />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}

export default App;

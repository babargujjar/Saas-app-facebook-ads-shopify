import './App.css';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Login from './pages/Login';
import Home from './pages/Home';
import Table from './components/Table';


function App() {
  return (
    <BrowserRouter>
      <div className="h-full w-full">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/table" element={<Table />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

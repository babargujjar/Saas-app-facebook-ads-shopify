import './App.css';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Login from './pages/Login';


function App() {
  return (
    <BrowserRouter>
      <div className="h-full w-full">
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

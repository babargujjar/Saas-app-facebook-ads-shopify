import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Login from "./pages/Login";

import FacebookCallback from "./pages/FacebookCallback";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <div className="h-full w-full">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/callback" element={<FacebookCallback />} />

          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

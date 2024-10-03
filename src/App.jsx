import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import FacebookLogin from "./pages/FacebookLogin";
import ShopifyLogin from "./pages/ShopifyLogin";

function App() {
  return (
    <BrowserRouter>
      <div className="h-full w-full">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/facebook-login" element={<FacebookLogin />} />
          <Route path="/shopify-login" element={<ShopifyLogin />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

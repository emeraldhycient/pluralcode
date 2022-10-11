import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/auth/Login";
import PasswordReset from "./pages/auth/PasswordReset";
import Signup from "./pages/auth/Signup";
import Product from "./pages/courses/Product";
import Home from "./pages/dashboard/Home";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/password/reset" element={<PasswordReset />} />
        <Route path="/student/dashboard" element={<Home />} />
        <Route path="/student/dashboard/:school" element={<Home />} />
        <Route path="/student/courses/product" element={<Product />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/auth/Login";
import PasswordReset from "./pages/auth/PasswordReset";
import Signup from "./pages/auth/Signup";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/password/reset" element={<PasswordReset />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

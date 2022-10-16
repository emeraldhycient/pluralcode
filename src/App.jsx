import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/auth/Login";
import PasswordReset from "./pages/auth/PasswordReset";
import Signup from "./pages/auth/Signup";
import Enrollment from "./pages/courses/Enrollment";
import Product from "./pages/courses/Product";
import Home from "./pages/dashboard/Home";


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <>

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
          <Route path="/student/courses/enrollment/:course" element={<Enrollment />} />
        </Routes>
      </BrowserRouter>

      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}

export default App;

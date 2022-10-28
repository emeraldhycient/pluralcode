import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/auth/Login";
import PasswordReset from "./pages/auth/PasswordReset";
import Signup from "./pages/auth/Signup";
import Enrollment from "./pages/courses/Enrollment";
import Product from "./pages/courses/Product";
import Home from "./pages/dashboard/Home";


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DataAnalytics from "./pages/courses/DataAnalytics";
import Software from "./pages/courses/Software";
import ProductManagement from "./pages/courses/ProductManagement";
import DataScience from "./pages/courses/DataScience";
import Cloud from "./pages/courses/Cloud";
import Mycourses from "./pages/mycourses/Mycourses";
import CourseDetail from "./pages/mycourses/CourseDetail"
import DocViewer from "./components/mycourses/DocViewer";
import Advisors from "./pages/advisors/Advisors";


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
          <Route path="/student/advisors" element={<Advisors />} />
          <Route path="/student/dashboard/:school" element={<Home />} />
          <Route path="/student/courses/product" element={<Product />} />
          <Route path="/student/courses/product-management" element={<ProductManagement />} />
          <Route path="/student/courses/data-analytics" element={<DataAnalytics />} />
          <Route path="/student/courses/data-science" element={<DataScience />} />
          <Route path="/student/courses/software" element={<Software />} />
          <Route path="/student/courses/cloud" element={<Cloud />} />
          <Route path="/student/courses/enrollment/:school/:course" element={<Enrollment />} />
          <Route path="/student/mycourses/" element={<Mycourses />} />
          <Route path="/student/mycourses/:course/:id" element={<CourseDetail />} />
          <Route path="/student/docviewer/:name/:link" element={<DocViewer />} />
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

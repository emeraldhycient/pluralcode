import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import firebaseapp, { onMessageListener, AskForToken, subscribeTopic } from "./services/pushNotification";


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
import Notifications from "./pages/notifications/Notifications";
import Exclusive from "./pages/exclusive/Exclusive";
import Tv from "./pages/tv/Tv";
import ReactNotificationComponent from "./components/common/ReactNotificationComponent";
import Profile from "./pages/profile/Profile";
import DataEngineering from "./pages/courses/DataEngineering";
import ProductMarketing from "./pages/courses/ProductMarketing";
import BusinessAnalytics from "./pages/courses/BusinessAnalytics";


function App() {


  const [isTokenFound, setTokenFound] = useState(false);
  console.log("Token found", isTokenFound);
  useEffect(() => {
    let data;
    async function tokenFunc() {
      data = await AskForToken(setTokenFound);
      if (data) {
        console.log("Token is", data);
        subscribeTopic(data)
      }
      subscribeTopic(data)
      return data;
    }
    tokenFunc();
  }, [setTokenFound]);






  const [show, setShow] = useState(false);
  const [notification, setNotification] = useState({ title: "", body: "" });

  onMessageListener()
    .then((payload) => {
      setShow(true);
      setNotification({
        title: payload.notification.title,
        body: payload.notification.body,
      });
      console.log(payload);
    })
    .catch((err) => console.log("failed: ", err));

  return (
    <>

      {
        show ?
          <ReactNotificationComponent title={notification.title} body={notification.body} /> : ""
      }
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Signup />} />
          <Route path="/register" element={<Signup />} />
          <Route path="/password/reset" element={<PasswordReset />} />
          <Route path="/student/dashboard" element={<Home />} />
          <Route path="/student/advisors" element={<Advisors />} />
          <Route path="/student/notifications" element={<Notifications />} />
          <Route path="/student/tv" element={<Tv />} />
          <Route path="/student/exclusive" element={<Exclusive />} />
          <Route path="/student/dashboard/:school" element={<Home />} />
          <Route path="/student/courses/product" element={<Product />} />
          <Route path="/student/courses/product-management" element={<ProductManagement />} />
          <Route path="/student/courses/product-marketing" element={<ProductMarketing />} />
          <Route path="/student/courses/data-analytics" element={<DataAnalytics />} />
          <Route path="/student/courses/business-analytics" element={<BusinessAnalytics />} />
          <Route path="/student/courses/data-science" element={<DataScience />} />
          <Route path="/student/courses/data-engineering" element={<DataEngineering />} />
          <Route path="/student/courses/software" element={<Software />} />
          <Route path="/student/courses/cloud" element={<Cloud />} />
          <Route path="/student/courses/enrollment/:school/:course" element={<Enrollment />} />
          <Route path="/student/mycourses/" element={<Mycourses />} />
          <Route path="/student/mycourses/:course/:id" element={<CourseDetail />} />
          <Route path="/student/docviewer/:name/:fileurl" element={<DocViewer />} />
          <Route path="/student/profile" element={<Profile />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

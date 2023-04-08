import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.js";
import About from "./pages/About.js";
import Contact from "./pages/Contact.js";
import Policy from "./pages/Policy.js";
import Pagenotfound from "./pages/Pagenotfound.js";
import Register from "./pages/auth/Register.js";
import { Toaster } from "react-hot-toast";
import Login from "./pages/auth/Login.js";
import Consult from "./pages/Consult.js";
import ForgotPassword from "./pages/auth/ForgotPassword.js";
import Dashboard from "./pages/user/Dashboard.js";
import PrivateRoute from "./components/routes/private.js";
import AdminRoute from "./components/routes/adminRoutes.js";
import AdminDashboard from "./pages/admin/AdminDashboard.js";
import CreateCategory from "./pages/admin/CreateCategory.js";
import CreateProduct from "./pages/admin/CreateProduct.js";
import Users from "./pages/admin/Users.js";
import Orders from "./pages/user/Order.js";
import Profile from "./pages/user/Profile.js";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<PrivateRoute />}>
          <Route path="user" element={<Dashboard />} />
          <Route path="user/orders" element={<Orders />} />
          <Route path="user/profile" element={<Profile />} />
        </Route>
        <Route path="/dashboard" element={<AdminRoute />}>
          <Route path="admin" element={<AdminDashboard />} />
          <Route path="admin/create-category" element={<CreateCategory />} />
          <Route path="admin/create-product" element={<CreateProduct />} />
          <Route path="admin/users" element={<Users />} />
        </Route>

        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/consult" element={<Consult />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Pagenotfound />} />
      </Routes>
    </>
  );
}

export default App;

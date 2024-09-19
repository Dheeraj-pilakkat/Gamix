import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./assets/css/styles.css";
import "./assets/css/bootstrap.min.css";
import "./assets/css/font-awesome.min.css";
import "./assets/css/responsive.css";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import { Route,  BrowserRouter as Router, Routes } from "react-router-dom";
import Login from "./components/Login.jsx";
import Pagenotfound from "./components/Pagenotfound.jsx";
import Signup from "./components/Signup.jsx";
import Cart from "./components/Cart.jsx";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>

        <div id="darkmode">
        <Header />
        <Routes>
        <Route path="/" element={<App/>}  />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="*" element={<Pagenotfound/>}  />
        </Routes>
        <Footer />
        </div>

    </Router>
  </StrictMode>
);

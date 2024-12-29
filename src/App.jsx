import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./Components/Header";
import Footer from "./Components/Footer";

import Login from "./Components/Login/Login";
import Account from "./Components/Account/Account";
import Signup from "./Components/Signup/Signup";
import Home from "./Components/Home/Home";
import Games from "./Components/Games/Games";

function App() {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
          <Route path="/games" element={<Games />} />
          <Route path="/account" element={<Account />} />
          <Route path="*" element={<h1>Page not found</h1>} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;

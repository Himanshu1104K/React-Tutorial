import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { Contact } from "./pages/Contact";
import { AboutUs } from "./pages/AboutUs";

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <nav>
            <div className="Links">
              <Link to="/">Home</Link>
              <Link to="/Contact">Contact Us</Link>
              <Link to="/About_us">About Us</Link>
            </div>
          </nav>

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/About_us" element={<AboutUs />} />
            <Route path="*" element={<h1>Error Wrong Route</h1>} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;

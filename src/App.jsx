import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { Contact } from "./pages/Contact";
import { Profile } from "./pages/Profile";

function App() {
  const [username, setUsername] = useState("Himanshu Kumar");

  return (
    <>
      <div className="App">
        <Router>
          <nav>
            <div className="Links">
              <Link to="/">Home</Link>
              <Link to="/Profile">Profile</Link>
              <Link to="/Contact">Contact Us</Link>
            </div>
          </nav>

          <Routes>
            <Route path="/" element={<HomePage username={username} />} />
            <Route path="/Profile" element={<Profile username={username} setUsername={setUsername} />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="*" element={<h1>Error Wrong Route</h1>} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

const TopComponent = () => {
  const [state, setState] = useState();
  return (
    <div>
      <MiddleComponent state={state} />
    </div>
  );
};

const MiddleComponent = (state) => {
  return (
    <div>
      <BottomComponent state={state} />
    </div>
  );
};

const BottomComponent = (state) => {
  return <div>State: {state}</div>;
};

export default App;

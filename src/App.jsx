import "./App.css";
import { useState, createContext } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { Contact } from "./pages/Contact";
import { Profile } from "./pages/Profile";
import { NavBar } from "./components/NavBar";

export const AppContext = createContext();
function App() {
  const [username, setUsername] = useState("Himanshu Kumar");

  return (
    <>
      <div className="App">
        <AppContext.Provider value={{ username, setUsername }}>
          <Router>
            <NavBar />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/Profile" element={<Profile />} />
              <Route path="/Contact" element={<Contact />} />
              <Route path="*" element={<h1>Error Wrong Route</h1>} />
            </Routes>
          </Router>
        </AppContext.Provider>
      </div>
    </>
  );
}

export default App;

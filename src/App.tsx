import "./App.css";
import { HomePage } from "./pages/HomePage";
import { Login } from "./pages/Login";
import { Contact } from "./pages/Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { Provider } from "react-redux";
import {store} from "./store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Router>
      </Provider>
    </div>
  );
}

export default App;

import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { Contact } from "./pages/Contact";
import { Profile } from "./pages/Profile";
import { NavBar } from "./components/NavBar";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });

  return (
    <>
      <div className="App">
        <QueryClientProvider client={client}>
          <Router>
            <NavBar />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/Profile" element={<Profile />} />
              <Route path="/Contact" element={<Contact />} />
              <Route path="*" element={<h1>Error Wrong Route</h1>} />
            </Routes>
          </Router>
        </QueryClientProvider>
      </div>
    </>
  );
}

export default App;

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import "./media.css";
import "./components/Card/Card.css";
import Dashboard from "./components/Dashboard/Dashboard";
import Inputs from "./Pages/Inputs";
import Profile from "./Pages/Profile";
import Project from "./Pages/Projects";
import Saved from "./Pages/Saved";
import Shared from "./Pages/Shared";
import Achievement from "./Pages/Achievment";
import Sidebar from "./components/Sidebar/Sidebar";
import { useState } from "react";

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        {/* <Navbar onSearch = {handleSearch}/> */}
        <Routes>
          <Route
            path="/"
            element={
              <Dashboard
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
              />
            }
          ></Route>
          <Route
            path="/dashboard"
            element={
              <Dashboard
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
              />
            }
          ></Route>
          <Route
            path="/portfolio"
            element={
              <Dashboard
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
              />
            }
          ></Route>
          <Route
            className="content"
            path="/inputs"
            element={<Inputs />}
          ></Route>
          <Route
            className="content"
            path="/profile"
            element={<Profile />}
          ></Route>

          <Route className="content" path="/project" element={<Project />} />
          <Route className="content" path="/saved" element={<Saved />} />
          <Route className="content" path="/shared" element={<Shared />} />
          <Route
            className="content"
            path="/achievement"
            element={<Achievement />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

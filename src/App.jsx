import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import "./App.css";
import './media.css';
import './components/Card/Card.css';
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
          <Route path="/" element={<Dashboard  searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>}></Route>
          <Route path="/dashboard" element={<Dashboard searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>}></Route>
          <Route path="/portfolio" element={<Dashboard searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>}></Route>
        </Routes>

        <div className="content">
          <Routes>
            <Route path="/inputs" element={<Inputs />}></Route>
            <Route path="/profile" element={<Profile />}></Route>

            <Route path="/project" element={<Project />} />
            <Route path="/saved" element={<Saved />} />
            <Route path="/shared" element={<Shared />} />
            <Route path="/achievement" element={<Achievement />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;

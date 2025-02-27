import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import "./App.css";
import './media.css';
import Dashboard from "./components/Dashboard/Dashboard";
import Inputs from "./Pages/Inputs";
import Profile from "./Pages/Profile";
import Project from "./Pages/Projects";
import Saved from "./Pages/Saved";
import Shared from "./Pages/Shared";
import Achievement from "./Pages/Achievment";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  
  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/portfolio" element={<Dashboard />}></Route>
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
}

export default App;

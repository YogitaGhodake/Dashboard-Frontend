import { NavLink, Outlet } from "react-router-dom";

const Portfolio = () => {
  return (
    <div className="portfolio-container">
      <h2>Portfolio</h2>
      <nav className="portfolio-tabs">
        <NavLink to="/project" activeClassName="active">Project</NavLink>
        <NavLink to="/saved" activeClassName="active">Saved</NavLink>
        <NavLink to="/shared" activeClassName="active">Shared</NavLink>
        <NavLink to="/achievement" activeClassName="active">Achievement</NavLink>
      </nav>

      <div className="tab-content">
        <Outlet />
      </div>
    </div>
  );
};

export default Portfolio;

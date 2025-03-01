import { useState, useEffect, useRef  } from "react";
import { Search, Filter} from "lucide-react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./Navbar.css";


const Navbar = ({ setSearchQuery }) => {
  const [activeTab, setActiveTab] = useState("Project");
  const tabs = [
   {name:"Project",path: '/'},
    {name:"Saved",path:'/saved'},
    {name:"Shared", path:'/shared'},
    {name:"Achievement", path:"/achievement"},
  ];

  const underlineRef = useRef(null);


  useEffect(() => {
    updateUnderlinePosition();
  }, [activeTab]); 


  const updateUnderlinePosition = () => {
    const index = tabs.findIndex((tab) => tab.name === activeTab);
    const tabElement = document.querySelectorAll(".tab")[index];

    if (underlineRef.current && tabElement) {
      underlineRef.current.style.width = `${tabElement.offsetWidth}px`;
      underlineRef.current.style.transform = `translateX(${tabElement.offsetLeft}px)`;
    }
  };

  return (
    <>
      <nav className="navbar">
        {/* Left Section: Tabs  */}
        <div className="navbar-left">
          <div className="tabs-container">
            {/* Light gray underline for all tabs */}
            <div className="tabs-underline"></div>
            <div className="tabs">
              {tabs.map((tab) => (
                <Link
                  key={tab.name}
                  to={tab.path}
                  className={`tab ${activeTab === tab.name ? "active" : ""}`}
                  onClick={() => setActiveTab(tab.name)}
                >
                  {tab.name}
                  {/* <div className={`tab-underline ${activeTab === tab ? "active-underline" : ""}`}></div> */}
                </Link>
              ))}
            </div>
            <div className="active-underline" ref={underlineRef}></div>
          </div>
        </div>

        {/* right section: Filter + Search */}
        <div className="navbar-right">
          <button className="filter-btn">
            <Filter className="icon"></Filter>
            <span className="filter-text">Filter</span>
          </button>
          <div className="search-box">
            <input 
            type="text" 
            placeholder="Search a project" 
            onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="search-icon" />
          </div>
        </div>
      </nav>
    </>
  );
};


Navbar.propTypes = {
  setSearchQuery: PropTypes.func.isRequired,
};

export default Navbar;

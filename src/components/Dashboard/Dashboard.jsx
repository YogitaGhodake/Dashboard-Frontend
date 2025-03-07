import { useEffect, useState } from "react";
import "./Dashboard.css";
import Navbar from "../Navbar/Navbar";
import Header from "../Header/Header";
import Card from "../Card/Card";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import NotificationsIcon from "@mui/icons-material/Notifications";
import FilterListIcon from "@mui/icons-material/FilterList"; 
import HomeIcon from "@mui/icons-material/Home";
import BusinessCenterSharpIcon from '@mui/icons-material/BusinessCenterSharp';
import InputIcon from "@mui/icons-material/Input";
import PersonIcon from '@mui/icons-material/Person';
import PropTypes from "prop-types";



const Dashboard = ({searchQuery ,setSearchQuery}) => {
  const [cardData, setCardData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://refreshing-attraction-36befe431c.strapiapp.com/api/projects?populate=*",
          {
            headers: {
              Authorization: `Bearer 1135213ca5c914cd2d3f205c3c67c78c95dbb0189b7bce1633455f2627170857be524b1093e17aa1d8c954be6a6acf112762e0479b23da09177d3dd72d111984f2589391216d6c61bf63cda0374ea8efe8a15b4664efd2e2e6e550ec23ae0c2e8413669c612e720cb967d915b7eaf3b2d07d6ebbf3b1050dc7a29ac64f754225`,
            },
          }
        );
        const data = await response.json();

        const formattedData = data.data.map((item) => ({
          image: item.image?.formats?.medium?.url || item.image?.url || "",
          title: item.title,
          description: item.description,
          language: item.language,
          author: item.author,
        }));

        setCardData(formattedData);
        setFilteredData(formattedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (!searchQuery) {
      setFilteredData(cardData);
    } else {
      const lowercasedQuery = searchQuery.toLowerCase();
      const filtered = cardData.filter(
        (item) =>
          item.title.toLowerCase().includes(lowercasedQuery) ||
          item.author.toLowerCase().includes(lowercasedQuery) ||
          item.language.toLowerCase().includes(lowercasedQuery)
      );
      setFilteredData(filtered);
    }
  }, [searchQuery, cardData]);



  return (
    <div className="main-container">
      <section className="dashboard-container">
        <Header />
        <div className="container">
          <div className="portolio-section">
            <h2>Portfolio</h2>
            <div className="shopping-bag">
              <ShoppingBagIcon style={{ color: "#DF5532" }} />
              <NotificationsIcon style={{ color: "#DF5532" }} />
            </div>

            <Navbar setSearchQuery={setSearchQuery} />
            <div className="card-container">
              {filteredData.length > 0 ? (
                filteredData.map((item, index) => (
                  <Card
                    key={index}
                    image={item.image}
                    title={item.title}
                    description={item.description}
                    language={item.language}
                    author={item.author}
                  />
                ))
              ) : (
                <p className="notfound">No results found.</p>
              )}
            </div>
          </div>
        </div>
      </section>
      <button className="bottom-filter-btn">
        <FilterListIcon className="filter-icon" />
        <span className="bottom-filter-text"> Filter</span>
      </button>
     
      <section className="bottom-nav">
        <div className="bottom-nav-item">
          <HomeIcon className="bottom-icon" />
          <span>Home</span>
        </div>
        <div className="bottom-nav-item active">
          <BusinessCenterSharpIcon className="bottom-icon" />
          <span>Portfolio</span>
        </div>
        <div className="bottom-nav-item">
          <InputIcon className="bottom-icon" />
          <span>Input</span>
        </div>
        <div className="bottom-nav-item">
          <PersonIcon className="bottom-icon" />
          <span>Profile</span>
        </div>
      </section>
    </div>
  );
};

Dashboard.propTypes = {
  searchQuery: PropTypes.string.isRequired,
  setSearchQuery: PropTypes.func.isRequired,
};

export default Dashboard;

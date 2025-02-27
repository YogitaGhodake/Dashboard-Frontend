import { useEffect, useState } from "react";
// import Sidebar from "../Sidebar/Sidebar";
import "./Dashboard.css";
import Navbar from "../Navbar/Navbar";
import Header from "../Header/Header";
import Card from "../Card/Card";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import NotificationsIcon from "@mui/icons-material/Notifications";

const Dashboard = () => {
  const [cardData, setCardData] = useState([]);

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

        // Transform API data into the required format
        const formattedData = data.data.map((item) => ({
          image: item.image?.formats?.medium?.url || item.image?.url || "",
          title: item.title,
          description: item.description,
          language: item.language,
          author: item.author,
        }));

        setCardData(formattedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

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

            <Navbar />
            <div className="card-container">
              {cardData.length > 0 ? (
                cardData.map((item, index) => (
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
                <p>Loading...</p>
              )}
            </div>
          </div>
        </div>
      </section>
      <button className="filter-btn">
  <i className="icon-filter"></i> Filter
</button>

      <section className="bottom-nav">
        <div className="nav-item active">
          <i className="icon-home"></i>
          <span>Home</span>
        </div>
        <div className="nav-item">
          <i className="icon-portfolio"></i>
          <span>Portfolio</span>
        </div>
        <div className="nav-item">
          <i className="icon-input"></i>
          <span>Input</span>
        </div>
        <div className="nav-item">
          <i className="icon-profile"></i>
          <span>Profile</span>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;

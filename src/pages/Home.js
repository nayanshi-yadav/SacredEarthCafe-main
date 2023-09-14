import React from "react";
import DP from "../Assets/Images/dp.png";
import UserCall from "../Assets/Icons/UserCall";
import { Box, Tab, Tabs, Typography } from "@mui/material";
import PropTypes from "prop-types";
import SpecialHome from "../Components/SpecialHome";
import MainHome from "../Components/MainHome";
import Desert from "../Components/Desert";
import Beverage from "../Components/Beverage";
import Footer from "../Components/Footer";
import { Search } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Home = () => {
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate()

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="home_root">
      <div className="home_head">
        <div className="d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center">
            <img src={DP} alt="dp" />
            <p className="body1 ms-1 color_sec">Sacred Earth Cafe</p>
          </div>
          <div className="d-flex align-items-center">
            <div className="icon_body">
              <UserCall />
            </div>
            <div className="icon_body ml-16" onClick={()=>navigate('/search')}>
              <Search />
            </div>
          </div>
        </div>
        <div className="home_tabs mt-32">
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab
              label={<p className="title14">Special</p>}
              {...a11yProps(0)}
              className="home_tab"
            />
            <Tab
              label={<p className="title14">Main</p>}
              {...a11yProps(1)}
              className="home_tab"
            />
            <Tab
              label={<p className="title14">Desserts</p>}
              {...a11yProps(2)}
              className="home_tab"
            />
            <Tab
              label={<p className="title14">Beverages</p>}
              {...a11yProps(3)}
              className="home_tab"
            />
          </Tabs>
        </div>
      </div>
      <div className="home_main">
        <TabPanel className="home_tabpanel" value={value} index={0}>
          <SpecialHome />
        </TabPanel>
        <TabPanel className="home_tabpanel" value={value} index={1}>
          <MainHome />
        </TabPanel>
        <TabPanel className="home_tabpanel" value={value} index={2}>
          <Desert />
        </TabPanel>
        <TabPanel className="home_tabpanel" value={value} index={3}>
          <Beverage />
        </TabPanel>
      </div>
      <Footer/>
    </div>
  );
};

export default Home;

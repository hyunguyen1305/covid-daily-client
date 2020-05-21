import React from "react";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import styled from "styled-components";
import Flag from "react-world-flags";
import moment from "moment";
import Paper from "@material-ui/core/Paper";

const TabUpdateNewsWrapper = styled.div`
  .tab-header {
    border-radius: 2px;

    .MuiTabs-scroller {
      border-bottom: 2px whitesmoke solid;
    }
    .MuiButtonBase-root {
      border-right: 2px whitesmoke solid;
    }
    .MuiTab-root {
      text-transform: capitalize;
    }
  }
  .tab-body {
    padding: 0 1rem 1rem 1rem;
    max-height: 50vh;
    overflow-y: scroll;
  }
  .tab-content {
    padding: 0.8rem 0;
    margin: 0.5rem 0;
    border-bottom: 1px solid black;

    :hover {
      background: rgba(0, 0, 0, 0.05);
    }
  }
`;

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
      className="tab-body"
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

function TabUpdateNews({ data_news, updatedTime }) {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };
  return (
    <TabUpdateNewsWrapper>
      <h2>Update News</h2>
      <small>{updatedTime}</small>
      <Paper style={{ marginTop: "1rem" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="off"
          className="tab-header"
        >
          {data_news &&
            data_news.map((ele, i) => {
              const dateFormat = moment(ele.date).format("MMMM Do");
              return <Tab key={i} label={dateFormat} {...a11yProps(i)} />;
            })}
        </Tabs>

        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          {data_news ? (
            data_news.map((ele, i) => {
              return (
                <TabPanel key={i} value={value} index={i} dir={theme.direction}>
                  {ele.dataNews.map((ele, i) => {
                    if (ele.nation) {
                      return (
                        <div key={i} className="tab-content">
                          <Box>
                            <Flag code={ele.nationCode} height="14" />{" "}
                            <strong>{ele.nation}</strong>:
                            <span>
                              {" "}
                              has{" "}
                              {ele.newCases && (
                                <span style={{ color: "#8080FF" }}>
                                  {ele.newCases} New Cases
                                </span>
                              )}{" "}
                              {ele.newCases && ele.deathCase && (
                                <span> and </span>
                              )}
                              {ele.deathCase && (
                                <span style={{ color: "#ea5455" }}>
                                  {ele.deathCase} Death Cases
                                </span>
                              )}
                            </span>
                          </Box>
                          <div style={{ marginTop: "0.3rem" }}>
                            {ele.sourceList.map((ele, i) => {
                              return <a href={ele}>[Source] </a>;
                            })}
                          </div>
                        </div>
                      );
                    }
                  })}
                </TabPanel>
              );
            })
          ) : (
            <div>...</div>
          )}
        </SwipeableViews>
      </Paper>
    </TabUpdateNewsWrapper>
  );
}

export default TabUpdateNews;

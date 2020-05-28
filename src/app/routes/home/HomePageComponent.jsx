import React, { useEffect } from "react";
import styled from "styled-components";
import GlobalCaseComponent from "./GlobalCaseComponent";
import TabUpdateNews from "./TabUpdateNews";
import SpinnerComponent from "../../globalComponent/SpinnerComponent";
import TableComponent from "./TableComponent";

const HomePageComponentWrapper = styled.div``;

function HomePageComponent({ loading, success, data, getData }) {
  useEffect(() => {
    getData();
  }, []);
  if (!data) return <SpinnerComponent loading={loading}></SpinnerComponent>;
  return (
    <HomePageComponentWrapper>
      {/* <SpinnerComponent loading={loading}></SpinnerComponent> */}
      <div className="container">
        <h1
          style={{ textAlign: "center", fontSize: "2rem", marginBottom: "0" }}
        >
          Covid-19 Daily
        </h1>
        <div
          style={{
            textAlign: "center",
            margin: "8px 0 1em 0",
            fontStyle: "italic",
          }}
        >
          {data.updatedTime}
        </div>
        <GlobalCaseComponent
          data_global={data.dataTable[0]}
          updatedTime={data.updatedTime}
        ></GlobalCaseComponent>
        <TabUpdateNews
          data_news={data.dataNews}
          updatedTime={data.updatedTime}
        ></TabUpdateNews>

        <TableComponent
          data_table={data.dataTable}
          updatedTime={data.updatedTime}
        ></TableComponent>
      </div>
    </HomePageComponentWrapper>
  );
}

export default HomePageComponent;

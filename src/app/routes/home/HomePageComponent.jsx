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
      <SpinnerComponent loading={loading}></SpinnerComponent>;
      <div className="container">
        <h1 style={{ textAlign: "center" }}>Covid-19 Daily</h1>
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
        <footer>
          <h4>
            Spectial thanks:{" "}
            <a href="https://www.worldometers.info/">
              https://www.worldometers.info/
            </a>{" "}
            for all the data.
          </h4>
          <div>
            This page all purpose for My demo Web Crawler. If you would like to
            complain or remove anything please contact via Email:{" "}
            <span>
              <a href="_blank">huy.nguyenngoc1305@gmail.com</a>
            </span>
          </div>
        </footer>
      </div>
    </HomePageComponentWrapper>
  );
}

export default HomePageComponent;

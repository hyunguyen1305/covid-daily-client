import React from "react";
import styled from "styled-components";
import CountUp from "react-countup";

const numberWithCommas = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const GlobalCaseComponentWrapper = styled.div`
  .number-case {
    font-size: 1.5rem;
    margin: 8px;
    padding: 8px;
    font-weight: 900;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  }
  .cases {
    padding: 8px;
  }
  .title-text {
    font-size: 1.5rem;
    font-family: noto sans, sans-serif;
    color: #363945;
  }
`;

function GlobalCaseComponent({ data_global, updatedTime }) {
  return (
    <GlobalCaseComponentWrapper>
      <div className="row" style={{ textAlign: "center" }}>
        <div className="col-md-3 col-lg-3 col-sm-6 col-xs-6 cases" style={{}}>
          <div className="title-text">All Cases</div>
          <CountUp
            end={data_global.totalCases}
            delay={1}
            separator=","
            className="number-case"
            style={{ color: "#8080FF" }}
          ></CountUp>
        </div>
        <div className="col-md-3 col-lg-3 col-sm-6 col-xs-6 cases" style={{}}>
          <div className="title-text">Death Cases</div>
          <CountUp
            end={data_global.totalDeaths}
            delay={1}
            separator=","
            className="number-case"
            style={{ color: "#ea5455" }}
          ></CountUp>
        </div>
        <div className="col-md-3 col-lg-3 col-sm-6 col-xs-6 cases" style={{}}>
          <div className="title-text">Recovered Cases</div>
          <CountUp
            end={data_global.totalRecovered}
            delay={1}
            separator=","
            className="number-case"
            style={{ color: "#8ACA2B" }}
          ></CountUp>
        </div>
        <div className="col-md-3 col-lg-3 col-sm-6 col-xs-6 cases" style={{}}>
          <div className="title-text">Remaining Cases</div>
          <CountUp
            end={data_global.remainingCases}
            delay={1}
            separator=","
            className="number-case"
            style={{ color: "#fe8a71" }}
          ></CountUp>
        </div>
      </div>
    </GlobalCaseComponentWrapper>
  );
}

export default GlobalCaseComponent;

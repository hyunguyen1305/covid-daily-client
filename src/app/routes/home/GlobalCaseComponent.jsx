import React from "react";
import styled from "styled-components";

const numberWithCommas = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const GlobalCaseComponentWrapper = styled.div`
  .number-case {
    font-size: 18px;
    text-align: center;
  }
`;

function GlobalCaseComponent({ data_global, updatedTime }) {
  return (
    <GlobalCaseComponentWrapper>
      <h2>Global case</h2>
      <div className="row" style={{ textAlign: "center" }}>
        <div className="col-6" style={{}}>
          <div className="title-text">Total cases</div>
          <div className="number-case">
            {numberWithCommas(data_global.totalCases)}
          </div>
        </div>
        <div className="col-6" style={{}}>
          <div className="title-text">Total Death Cases</div>
          <div className="number-case">
            {numberWithCommas(data_global.totalDeaths)}
          </div>
        </div>
      </div>
      <div className="row" style={{ textAlign: "center" }}>
        <div className="col-6" style={{}}>
          <div className="title-text">New cases</div>
          <div className="number-case">
            {numberWithCommas(data_global.newCase)}
          </div>
        </div>
        <div className="col-6" style={{}}>
          <div className="title-text">New Death cases</div>
          <div className="number-case">
            {numberWithCommas(data_global.newDeath)}
          </div>
        </div>
      </div>
      <div className="row" style={{ textAlign: "center" }}>
        <div className="col-6" style={{}}>
          <div className="title-text">Total Recovered Cases</div>
          <div className="number-case">
            {numberWithCommas(data_global.totalRecovered)}
          </div>
        </div>
        <div className="col-6" style={{}}>
          <div className="title-text">New Death cases</div>
          <div className="number-case">
            {numberWithCommas(data_global.remainingCases)}
          </div>
        </div>
      </div>
    </GlobalCaseComponentWrapper>
  );
}

export default GlobalCaseComponent;

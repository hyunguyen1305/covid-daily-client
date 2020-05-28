import React from "react";
import MaterialTable from "material-table";
import Flag from "react-world-flags";

const numberWithCommas = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export default function TableComponent({ data_table, updatedTime }) {
  const [state, setState] = React.useState({
    columns: [
      {
        title: "Nation",
        field: "nationName",
        cellStyle: {
          position: "sticky",
          left: 0,
          zIndex: 9,
          borderRight: "1px solid #eeeeee",
          backgroundColor: "white",
          minWidth: "160px",
        },
        render: (rowData) => {
          return (
            <strong>
              {rowData.nationCode === "WORLD" ? (
                <div>
                  <img
                    src="https://www.downloadclipart.net/svg/22466-map-black-world-svg.svg"
                    alt="world"
                    height="16"
                  />
                  {rowData.nationName}
                </div>
              ) : (
                <div>
                  <Flag code={rowData.nationCode} height="14" />{" "}
                  {rowData.nationName}
                </div>
              )}
            </strong>
          );
        },
      },
      {
        title: "Total Cases",
        field: "totalCases",
        type: "numeric",
        cellStyle: { borderRight: "1px solid #eeeeee", whiteSpace: "nowrap" },
        render: (rowData) => {
          return (
            <strong style={{ color: "blue" }}>
              {numberWithCommas(rowData.totalCases)}
            </strong>
          );
        },
      },
      {
        cellStyle: {
          borderRight: "1px solid #eeeeee",
          whiteSpace: "nowrap",
        },
        title: "New Cases",
        field: "newCase",
        type: "numeric",
        render: (rowData) => {
          if (rowData.newCase) {
            return (
              <div style={{ color: "#8080FF" }}>
                + {numberWithCommas(rowData.newCase)}
              </div>
            );
          }
        },
      },
      {
        cellStyle: { borderRight: "1px solid #eeeeee", whiteSpace: "nowrap" },
        title: "Yesterday New Cases",
        field: "ynewCase",
        type: "numeric",
        render: (rowData) => {
          if (rowData.ynewCase) {
            return (
              <React.Fragment>
                <div style={{ color: "#8080FF", filter: "brightness(50%)" }}>
                  + {numberWithCommas(rowData.ynewCase)}
                </div>
                <small style={{ whiteSpace: "nowrap" }}>
                  (Total: {numberWithCommas(rowData.ytotalCases)})
                </small>
              </React.Fragment>
            );
          }
        },
      },
      {
        title: "Total Death Cases",
        field: "totalDeaths",
        type: "numeric",
        cellStyle: { borderRight: "1px solid #eeeeee", whiteSpace: "nowrap" },
        render: (rowData) => {
          if (rowData.totalDeaths) {
            return (
              <strong style={{ color: "red" }}>
                {numberWithCommas(rowData.totalDeaths)}
              </strong>
            );
          }
        },
      },
      {
        cellStyle: { borderRight: "1px solid #eeeeee" },
        title: "New Death Cases",
        field: "newDeath",
        type: "numeric",
        render: (rowData) => {
          if (rowData.newDeath) {
            return (
              <div style={{ color: "#ea5455" }}>
                + {numberWithCommas(rowData.newDeath)}
              </div>
            );
          }
        },
      },
      {
        cellStyle: { borderRight: "1px solid #eeeeee" },
        title: "Yesterday Death Cases",
        field: "ynewDeath",
        type: "numeric",
        render: (rowData) => {
          if (rowData.ynewDeath) {
            return (
              <React.Fragment>
                <div style={{ color: "#ea5455", filter: "brightness(50%)" }}>
                  + {numberWithCommas(rowData.ynewDeath)}
                </div>
                <small style={{ whiteSpace: "nowrap" }}>
                  (Total: {numberWithCommas(rowData.ytotalDeaths)})
                </small>
              </React.Fragment>
            );
          }
        },
      },
      {
        title: "Recovered Cases",
        field: "totalRecovered",
        type: "numeric",
        render: (rowData) => {
          if (rowData.totalRecovered) {
            return (
              <div style={{ color: "#8ACA2B" }}>
                {numberWithCommas(rowData.totalRecovered)}
              </div>
            );
          }
        },
      },
      {
        title: "Remaining Cases",
        field: "remainingCases",
        type: "numeric",
        render: (rowData) => {
          if (rowData.remainingCases) {
            return (
              <div style={{ color: "#fe8a71" }}>
                {numberWithCommas(rowData.remainingCases)}
              </div>
            );
          }
        },
      },
    ],
    data: data_table,
  });

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Report Covid-19 Cases</h2>
      <MaterialTable
        title={<small style={{ wordBreak: "break-word" }}>{updatedTime}</small>}
        columns={state.columns}
        data={state.data}
        options={{
          paging: false,
          headerStyle: {
            position: "sticky",
            top: 0,
            backgroundColor: "#222831",
            borderRight: "1px #eeeeee solid",
            borderLeft: "1px #eeeeee solid",
            color: "white",
          },
          maxBodyHeight: "80vh",
          minBodyHeight: "80vh",
        }}
      />
    </div>
  );
}

import React from "react";
import RingLoader from "react-spinners/RingLoader";

function SpinnerComponent({ loading, success, fail }) {
  return (
    <div
      className="sweet-loading"
      style={{
        position: "fixed",
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        background: "white",
        zIndex: "9999",
        width: "100%",
        height: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          flexDirection: "column",
        }}
      >
        <RingLoader size={150} color={"#5fdde5"} loading={true} />
        <div style={{ fontSize: "2rem" }}>Getting data. Please wait...</div>
      </div>
    </div>
  );
}

export default SpinnerComponent;

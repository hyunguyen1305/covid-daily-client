import React from "react";
import Swal from "sweetalert2";

function SpinnerComponent({ loading, success, fail }) {
  const renderSpiner = (loading, success, fail) => {
    if (loading) {
      Swal.fire({
        titleText: "Loading ...",
        onOpen: () => {
          Swal.showLoading();
        },
        allowEscapeKey: false,
        allowOutsideClick: false,
      });
    } else {
      Swal.fire({
        titleText: "Done!",
        icon: "success",
        timer: 500,
        showConfirmButton: false,
      });
    }
  };
  return <div>{renderSpiner(loading, success, fail)}</div>;
}

export default SpinnerComponent;

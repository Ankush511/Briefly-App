import React from "react";
import SpinLoading from "./SpinLoading.gif";

const Spinner = () => {
  return (
    <div className="text-center">
      <img className="my-3" src={SpinLoading} alt="spinloading" />
    </div>
  );
};

export default Spinner;

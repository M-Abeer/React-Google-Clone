import React from "react";
// import Loader from "react-loader-spinner";
import ClipLoader from "react-spinners/ClipLoader";

const Loading = () => {
  return (
    <div className="flex justify-center items-center">
      {/* <Loader type="Puff" color="#00BFFF" height={550} width={80} /> */}
      <ClipLoader
        color={"#00BFFF"}
        cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default Loading;

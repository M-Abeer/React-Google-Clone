import React from "react";
// import ReactPlayer from "react-player";
import { useResultContext } from "../Context/ResultContextProvider";
import { useLocation } from "react-router-dom";
import Loading from "./Loading";

const Result = () => {
  console.log("Abeer");
  const { result, loading, getResult, searchterm, setSearchTerm } =
    useResultContext();
  const location = useLocation(); //Give URL
  console.log(location.pathname);
  if (loading) return <Loading />;
  switch (location.pathname) {
    case "/search":
      return "SEARCH";

    default:
      return "ERROR";
  }
  return console.log(location.pathname);
};

export default Result;

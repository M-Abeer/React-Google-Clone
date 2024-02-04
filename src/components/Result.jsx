import React from "react";
import ReactPlayer from "react-player";
import { useResultContext } from "../Context/ResultContextProvider";
import { useLocation } from "react-router-dom";
import Loading from "./Loading";

const Result = () => {
  const { results, loading, getResult, searchterm, setSearchTerm } =
    useResultContext();
  const location = useLocation(); //Give URL
  if (loading) return <Loading />;
  switch (key) {
    case value:
      break;

    default:
      break;
  }
};

export default Result;

import React from "react";
import Result from "./Result";
import { Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import Search from "./Search";

// import { Route, Routes } from "react-router-dom";

const Body = () => {
  const navigate = useNavigate();
  return (
    <div className="p-4">
      <Routes>
        {/* <Route exact path="/" element={<abc />}>
          { navigate("/search"); }
        </Route> */}

        <Route exact path="/search" element={<Result />}></Route>
        <Route exact path="/images" element={<Result />}></Route>
        <Route exact path="/news" element={<Result />}></Route>
        <Route exact path="/videos" element={<Result />}></Route>
      </Routes>
    </div>
  );
};

export default Body;
